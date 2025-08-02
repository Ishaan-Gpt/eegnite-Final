import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  Mail, 
  TrendingUp, 
  Calendar, 
  Trash2, 
  RefreshCw, 
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Activity,
  Menu,
  X,
  Home,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MoreHorizontal,
  Zap,
  Shield,
  Rocket,
  Star
} from 'lucide-react';
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Editor from './Editor';

// Types for our data
interface ContactSubmission {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  website?: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
  newsletter: boolean;
  createdAt: string;
  updatedAt: string;
}

interface NewsletterSignup {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

interface DashboardStats {
  totalSubmissions: number;
  totalSignups: number;
  todaySubmissions: number;
  todaySignups: number;
  serviceBreakdown: Array<{
    service: string;
    count: number;
  }>;
}

function BlockWrapper({ id, children, ...props }: any) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.7 : 1,
        marginBottom: '2rem',
      }}
      className="rounded-2xl border border-border/50 bg-card/40 shadow-elegant p-6 mb-6"
      {...attributes}
      {...listeners}
      {...props}
    >
      {children}
    </div>
  );
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'editor'>('dashboard');
  const [activeSection, setActiveSection] = useState('overview');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [signups, setSignups] = useState<NewsletterSignup[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  // Helper functions to be moved to top level or defined here
  const fetchSiteContent = async (key: string) => {
    try {
      const { data, error } = await supabase
        .from('SiteContent')
        .select('content')
        .eq('key', key)
        .single();
      if (error || !data) return null;
      return data.content || null;
    } catch (err) {
      return null;
    }
  };
  const saveSiteContent = async (key: string, content: any) => {
    try {
      const { error } = await supabase
        .from('SiteContent')
        .upsert({ key, content });
      if (error) throw error;
      return { success: true };
    } catch (err) {
      return { error: err };
    }
  };
  const fetchContactSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('ContactSubmission')
        .select('*')
        .order('createdAt', { ascending: false })
        .limit(100);
      if (error) return [];
      return data || [];
    } catch (err) {
      return [];
    }
  };
  const fetchNewsletterSignups = async () => {
    try {
      const { data, error } = await supabase
        .from('NewsletterSignup')
        .select('*')
        .order('createdAt', { ascending: false })
        .limit(100);
      if (error) return [];
      return data || [];
    } catch (err) {
      return [];
    }
  };

  // Fetch data directly from Supabase
  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);

      // Fetch contact submissions
      const submissionsData = await fetchContactSubmissions();

      // Fetch newsletter signups
      const signupsData = await fetchNewsletterSignups();

      // Calculate stats
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const todaySubmissions = submissionsData.filter(s => 
        new Date(s.createdAt) >= today
      ).length || 0;

      const todaySignups = signupsData.filter(s => 
        new Date(s.createdAt) >= today
      ).length || 0;

      // Service breakdown
      const serviceCounts: { [key: string]: number } = {};
      submissionsData.forEach(submission => {
        serviceCounts[submission.service] = (serviceCounts[submission.service] || 0) + 1;
      });

      const serviceBreakdown = Object.entries(serviceCounts).map(([service, count]) => ({
        service,
        count
      }));

      setSubmissions(submissionsData || []);
      setSignups(signupsData || []);
      setStats({
        totalSubmissions: submissionsData?.length || 0,
        totalSignups: signupsData?.length || 0,
        todaySubmissions,
        todaySignups,
        serviceBreakdown
      });

    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      toast({
        title: "Error",
        description: "Failed to load dashboard data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const handleDeleteSubmission = async (id: number) => {
    try {
      const { error } = await supabase
        .from('ContactSubmission')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setSubmissions(prev => prev.filter(s => s.id !== id));
      toast({
        title: "Success",
        description: "Contact submission deleted successfully.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to delete submission. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleToggleNewsletterStatus = async (id: number, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('NewsletterSignup')
        .update({ isActive: !isActive })
        .eq('id', id);

      if (error) throw error;

      setSignups(prev => prev.map(s =>
        s.id === id ? { ...s, isActive: !isActive } : s
      ));
      toast({
        title: "Success",
        description: `Newsletter signup ${!isActive ? 'activated' : 'ted'} successfully.`,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update signup status. Please try again.",
        variant: "destructive"
      });
    }
  };

  const filteredSubmissions = submissions.filter(submission =>
    submission.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSignups = signups.filter(signup =>
    signup.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (signup.firstName && signup.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (signup.lastName && signup.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'submissions', label: 'Contact Submissions', icon: FileText },
    { id: 'signups', label: 'Newsletter Signups', icon: Mail },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative w-full max-w-md mx-4">
          <div className="relative h-full rounded-[1.25rem] border border-border/50 p-2">
            <div className="relative flex h-full flex-col justify-between gap-6low-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
              <div className="text-center">
                <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h3 className="luxury-h4 text-foreground mb-2">Error Loading Dashboard</h3>
                <p className="luxury-body text-muted-foreground mb-6">{error}</p>
                <button 
                  onClick={fetchData}
                  className="btn-premium px-6 py-3 text-sm"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | EEGNITE</title>
        <meta name="description" content="Admin dashboard for EEGNITE. Manage contact submissions, newsletter signups, and view real-time stats." />
      </Helmet>
      
      <div className="min-h-screen bg-black text-foreground">
        {/* Tab Navigation */}
        <div className="flex border-b border-border/50">
              <button
            className={`px-6 py-4 font-bold text-lg transition-colors ${activeTab === 'dashboard' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('dashboard')}
              >
            Dashboard
              </button>
            <button
            className={`px-6 py-4 font-bold text-lg transition-colors ${activeTab === 'editor' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('editor')}
            >
            Editor
            </button>
          </div>
        {/* Main Content */}
        {activeTab === 'dashboard' ? (
          <div className="flex h-[calc(100vh-80px)]">
          {/* Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.aside
                initial={{ width: 0 }}
                animate={{ width: 280 }}
                exit={{ width: 0 }}
                className="border-r border-border/50 overflow-hidden"
              >
                <nav className="p-4">
                  <div className="space-y-2">
                    {sidebarItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                            activeSection === item.id 
                              ? 'bg-primary/20 text-primary border border-primary/30'
                              : 'text-muted-foreground hover:text-foreground hover:bg-card/40 border border-transparent'
                          }`}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span className="luxury-body text-sm font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </nav>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search submissions, signups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 bg-card/40 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              {/* Overview Section */}
              {activeSection === 'overview' && (
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-32 bg-card/40 border border-border/50 rounded-lg animate-pulse" />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="stats"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-8"
                    >
                      {/* Stats Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="relative h-full rounded-[1.25rem] border border-border/50 p-2">
                          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6 backdrop-blur-sm shadow-elegant">
                            <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                              <Users className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="luxury-h5 text-foreground">Total Submissions</h3>
                              <div className="luxury-h2 text-primary">{stats?.totalSubmissions || 0}</div>
                              <p className="luxury-body text-sm text-muted-foreground">
                                Today: {stats?.todaySubmissions || 0}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="relative h-full rounded-[1.25rem] border border-border/50 p-2">
                          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6 backdrop-blur-sm shadow-elegant">
                            <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                              <Mail className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="luxury-h5 text-foreground">Newsletter Signups</h3>
                              <div className="luxury-h2 text-primary">{stats?.totalSignups || 0}</div>
                              <p className="luxury-body text-sm text-muted-foreground">
                                Today: {stats?.todaySignups || 0}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="relative h-full rounded-[1.25rem] border border-border/50 p-2">
                          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6 backdrop-blur-sm shadow-elegant">
                            <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                              <TrendingUp className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="luxury-h5 text-foreground">Growth Rate</h3>
                              <div className="luxury-h2 text-primary">{stats?.todaySubmissions || 0}</div>
                              <p className="luxury-body text-sm text-muted-foreground">
                                New submissions today
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="relative h-full rounded-[1.25rem] border border-border/50 p-2">
                          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6 backdrop-blur-sm shadow-elegant">
                            <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                              <Activity className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="luxury-h5 text-foreground">Active Subscribers</h3>
                              <div className="luxury-h2 text-primary">{signups.filter(s => s.isActive).length}</div>
                              <p className="luxury-body text-sm text-muted-foreground">
                                Active newsletter subscribers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Service Breakdown */}
                      {stats?.serviceBreakdown && stats.serviceBreakdown.length > 0 && (
                        <div className="relative rounded-[1.25rem] border border-border/50 p-2">
                          <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                                <BarChart3 className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="luxury-h4 text-foreground">Service Breakdown</h3>
                                <p className="luxury-body text-sm text-muted-foreground">Most requested services</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              {stats.serviceBreakdown.map((service) => (
                                <div key={service.service} className="flex items-center justify-between p-4 bg-card/60 rounded-lg border border-border/30">
                                  <span className="luxury-body font-medium text-foreground">{service.service}</span>
                                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-lg border border-primary/30">
                                    {service.count} requests
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Recent Activity */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="relative rounded-[1.25rem] border border-border/50 p-2">
                          <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="luxury-h4 text-foreground">Recent Submissions</h3>
                                <p className="luxury-body text-sm text-muted-foreground">Latest contact form submissions</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              {submissions.slice(0, 5).map((submission) => (
                                <div key={submission.id} className="flex items-center justify-between p-4 bg-card/60 rounded-lg border border-border/30">
                                  <div>
                                    <div className="luxury-body font-medium text-foreground">{submission.firstName} {submission.lastName}</div>
                                    <div className="luxury-body text-sm text-muted-foreground">{submission.service}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="luxury-body text-sm text-muted-foreground">
                                      {new Date(submission.createdAt).toLocaleDateString()}
                                    </div>
                                    <span className="inline-block px-2 py-1 text-xs font-medium rounded border ${
                                      submission.newsletter 
                                        ? 'bg-primary/20 text-primary border-primary/30' 
                                        : 'bg-muted/20 text-muted-foreground border-muted/30'
                                    }">
                                      {submission.newsletter ? 'Newsletter' : 'No'}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="relative rounded-[1.25rem] border border-border/50 p-2">
                          <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                                <Mail className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="luxury-h4 text-foreground">Recent Signups</h3>
                                <p className="luxury-body text-sm text-muted-foreground">Latest newsletter subscriptions</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              {signups.slice(0, 5).map((signup) => (
                                <div key={signup.id} className="flex items-center justify-between p-4 bg-card/60 rounded-lg border border-border/30">
                                  <div>
                                    <div className="luxury-body font-medium text-foreground">{signup.email}</div>
                                    <div className="luxury-body text-sm text-muted-foreground">
                                      {signup.firstName} {signup.lastName}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="luxury-body text-sm text-muted-foreground">
                                      {new Date(signup.createdAt).toLocaleDateString()}
                                    </div>
                                    <span className="inline-block px-2 py-1 text-xs font-medium rounded border ${
                                      signup.isActive 
                                        ? 'bg-primary/20 text-primary border-primary/30' 
                                        : 'bg-muted/20 text-muted-foreground border-muted/30'
                                    }">
                                      {signup.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Contact Submissions Section */}
              {activeSection === 'submissions' && (
                <div className="relative rounded-[1.25rem] border border-border/50 p-2">
                  <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="luxury-h4 text-foreground">Contact Submissions ({filteredSubmissions.length})</h3>
                        <p className="luxury-body text-sm text-muted-foreground">Manage and view all contact form submissions</p>
                      </div>
                    </div>
                    
                    {loading ? (
                      <div className="space-y-3">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-16 bg-card/60 rounded-lg animate-pulse" />
                        ))}
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border/30">
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Name</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Email</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Service</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Budget</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Date</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Newsletter</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredSubmissions.map((submission) => (
                              <tr key={submission.id} className="border-b border-border/20card/60 transition-colors">
                                <td className="p-3">
                                  <div className="luxury-body font-medium text-foreground">
                                    {submission.firstName} {submission.lastName}
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div className="luxury-body text-muted-foreground">{submission.email}</div>
                                </td>
                                <td className="p-3">
                                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-lg border border-primary/30">
                                    {submission.service}
                                  </span>
                                </td>
                                <td className="p-3">
                                  <div className="luxury-body text-muted-foreground">{submission.budget}</div>
                                </td>
                                <td className="p-3">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-3 w-3 text-muted-foreground" />
                                    <span className="luxury-body text-sm text-muted-foreground">
                                      {new Date(submission.createdAt).toLocaleDateString()}
                                    </span>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <span className="inline-block px-2 py-1 text-xs font-medium rounded border ${
                                    submission.newsletter 
                                      ? 'bg-primary/20 text-primary border-primary/30' 
                                      : 'bg-muted/20 text-muted-foreground border-muted/30'
                                  }">
                                    {submission.newsletter ? 'Yes' : 'No'}
                                  </span>
                                </td>
                                <td className="p-3">
                                  <button
                                    onClick={() => handleDeleteSubmission(submission.id)}
                                    className="p-2 rounded-lg transition-colors text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Newsletter Signups Section */}
              {activeSection === 'signups' && (
                <div className="relative rounded-[1.25rem] border border-border/50 p-2">
                  <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="luxury-h4 text-foreground">Newsletter Signups ({filteredSignups.length})</h3>
                        <p className="luxury-body text-sm text-muted-foreground">Manage newsletter subscriptions and preferences</p>
                      </div>
                    </div>
                    
                    {loading ? (
                      <div className="space-y-3">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-16 bg-card/60 rounded-lg animate-pulse" />
                        ))}
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border/30">
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Email</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Name</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Date</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Status</th>
                              <th className="text-left p-3 luxury-body text-sm font-medium text-muted-foreground">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredSignups.map((signup) => (
                              <tr key={signup.id} className="border-b border-border/20card/60 transition-colors">
                                <td className="p-3">
                                  <div className="luxury-body font-medium text-foreground">{signup.email}</div>
                                </td>
                                <td className="p-3">
                                  <div className="luxury-body text-muted-foreground">
                                    {signup.firstName} {signup.lastName}
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-3 w-3 text-muted-foreground" />
                                    <span className="luxury-body text-sm text-muted-foreground">
                                      {new Date(signup.createdAt).toLocaleDateString()}
                                    </span>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <span className="inline-block px-2 py-1 text-xs font-medium rounded border ${
                                    signup.isActive 
                                      ? 'bg-primary/20 text-primary border-primary/30' 
                                      : 'bg-muted/20 text-muted-foreground border-muted/30'
                                  }">
                                    {signup.isActive ? 'Active' : 'Inactive'}
                                  </span>
                                </td>
                                <td className="p-3">
                                  <button
                                    onClick={() => handleToggleNewsletterStatus(signup.id, signup.isActive)}
                                    className={`p-2 rounded-lg transition-colors ${
                                      signup.isActive 
                                        ? 'text-destructive hover:text-destructive/80 hover:bg-destructive/10' 
                                        : 'text-primary hover:text-primary/80 hover:bg-primary/10'
                                    }`}
                                  >
                                    {signup.isActive ? (
                                      <CheckCircle className="h-4 w-4" />
                                    ) : (
                                      <Clock className="h-4 w-4" />
                                    )}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Analytics Section */}
              {activeSection === 'analytics' && (
                <div className="space-y-6">
                  <div className="relative rounded-[1.25rem] border border-border/50 p-2">
                    <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="luxury-h4 text-foreground">Analytics Dashboard</h3>
                          <p className="luxury-body text-sm text-muted-foreground">Advanced analytics and reporting coming soon</p>
                        </div>
                      </div>
                      <div className="text-center py-12">
                        <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="luxury-body text-muted-foreground">Analytics features will be available soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Section */}
              {activeSection === 'settings' && (
                <div className="space-y-6">
                  <div className="relative rounded-[1.25rem] border border-border/50 p-2">
                    <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6rop-blur-sm shadow-elegant">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-fit rounded-lg border border-border/50 bg-accent/20-accent-foreground p-3">
                          <Settings className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="luxury-h4 text-foreground">Dashboard Settings</h3>
                          <p className="luxury-body text-sm text-muted-foreground">Configure your admin dashboard preferences</p>
                        </div>
                      </div>
                      <div className="text-center py-12">
                        <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="luxury-body text-muted-foreground">Settings panel will be available soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
        ) : (
          <Editor />
        )}
      </div>
    </>
  );
} 