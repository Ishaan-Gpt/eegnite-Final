import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Target, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface CalculatorInputs {
  monthlyBudget: number;
  industry: string;
  campaignType: string;
  targetAudience: number;
  expectedCTR: number;
  avgOrderValue: number;
  conversionRate: number;
  timeframe: number;
}

interface CalculatorResults {
  totalInvestment: number;
  expectedLeads: number;
  expectedCustomers: number;
  expectedRevenue: number;
  roi: number;
  roas: number;
  breakEvenPoint: number;
  monthlyROI: number;
}

const industries = [
  { value: 'ecommerce', label: 'E-commerce', multiplier: 1.2 },
  { value: 'saas', label: 'SaaS', multiplier: 1.5 },
  { value: 'b2b', label: 'B2B Services', multiplier: 1.8 },
  { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
  { value: 'finance', label: 'Finance', multiplier: 1.4 },
  { value: 'education', label: 'Education', multiplier: 1.1 },
  { value: 'real-estate', label: 'Real Estate', multiplier: 1.6 },
  { value: 'other', label: 'Other', multiplier: 1.0 }
];

const campaignTypes = [
  { value: 'ppc', label: 'PPC Advertising', leadMultiplier: 1.0 },
  { value: 'seo', label: 'SEO', leadMultiplier: 0.8 },
  { value: 'social', label: 'Social Media', leadMultiplier: 0.9 },
  { value: 'email', label: 'Email Marketing', leadMultiplier: 1.3 },
  { value: 'content', label: 'Content Marketing', leadMultiplier: 0.7 },
  { value: 'influencer', label: 'Influencer Marketing', leadMultiplier: 1.1 }
];

const calculatorSchema = z.object({
  monthlyBudget: z.number().min(1, "Monthly budget is required"),
  industry: z.string().min(2, "Industry is required"),
  campaignType: z.string().min(2, "Campaign type is required"),
  targetAudience: z.number().min(1, "Target audience is required"),
  expectedCTR: z.number().min(0.1, "CTR must be at least 0.1%"),
  avgOrderValue: z.number().min(1, "Average order value is required"),
  conversionRate: z.number().min(0.1, "Conversion rate is required"),
  timeframe: z.number().min(1, "Timeframe is required"),
});

type CalculatorFormData = z.infer<typeof calculatorSchema>;

export function AdvancedROICalculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<CalculatorFormData>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      monthlyBudget: 5000,
      industry: 'ecommerce',
      campaignType: 'ppc',
      targetAudience: 100000,
      expectedCTR: 2.5,
      avgOrderValue: 150,
      conversionRate: 3.5,
      timeframe: 12,
    },
  });

  const [results, setResults] = useState<CalculatorResults>({
    totalInvestment: 0,
    expectedLeads: 0,
    expectedCustomers: 0,
    expectedRevenue: 0,
    roi: 0,
    roas: 0,
    breakEvenPoint: 0,
    monthlyROI: 0
  });

  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    calculateROI();
  }, [watch()]);

  const calculateROI = () => {
    const industryMultiplier = industries.find(i => i.value === watch('industry'))?.multiplier || 1.0;
    const campaignMultiplier = campaignTypes.find(c => c.value === watch('campaignType'))?.leadMultiplier || 1.0;
    
    const totalInvestment = watch('monthlyBudget') * watch('timeframe');
    const monthlyImpressions = Math.round(watch('targetAudience') * 0.8);
    const monthlyClicks = Math.round(monthlyImpressions * (watch('expectedCTR') / 100));
    const monthlyLeads = Math.round(monthlyClicks * campaignMultiplier);
    const monthlyCustomers = Math.round(monthlyLeads * (watch('conversionRate') / 100));
    const monthlyRevenue = monthlyCustomers * watch('avgOrderValue') * industryMultiplier;
    
    const totalLeads = monthlyLeads * watch('timeframe');
    const totalCustomers = monthlyCustomers * watch('timeframe');
    const totalRevenue = monthlyRevenue * watch('timeframe');
    
    const roi = ((totalRevenue - totalInvestment) / totalInvestment) * 100;
    const roas = totalRevenue / totalInvestment;
    const breakEvenPoint = totalInvestment / monthlyRevenue;
    const monthlyROI = roi / watch('timeframe');

    setResults({
      totalInvestment,
      expectedLeads: totalLeads,
      expectedCustomers: totalCustomers,
      expectedRevenue: totalRevenue,
      roi: roi,
      roas: roas,
      breakEvenPoint: breakEvenPoint,
      monthlyROI: monthlyROI
    });
  };

  const handleCalculate = async (data: CalculatorFormData) => {
    setLoading(true);
    setApiError(null);
    try {
      // Simulate API call
      const API_URL = import.meta.env.VITE_ROI_API_URL;
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to calculate ROI');
      const result = await response.json();
      setResults(result);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getROIColor = (roi: number) => {
    if (roi >= 300) return 'text-green-600';
    if (roi >= 200) return 'text-green-500';
    if (roi >= 100) return 'text-yellow-500';
    if (roi >= 0) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 text-primary mr-3" />
          <h2 className="luxury-h2 text-3xl font-clash font-bold">Advanced ROI Calculator</h2>
        </div>
        <p className="text-muted-foreground font-satoshi max-w-2xl mx-auto luxury-body">
          Get accurate ROI projections for your marketing campaigns with our advanced calculator 
          that factors in industry benchmarks and campaign types.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center font-clash">
              <Target className="w-5 h-5 mr-2" />
              Campaign Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="monthlyBudget">Monthly Marketing Budget ($)</Label>
              <Input
                id="monthlyBudget"
                type="number"
                {...register('monthlyBudget')}
                className="text-lg"
              />
              {errors.monthlyBudget && <p className="text-red-500 text-sm">{errors.monthlyBudget.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={watch('industry')} onValueChange={(value) => setValue('industry', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.industry && <p className="text-red-500 text-sm">{errors.industry.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="campaignType">Campaign Type</Label>
              <Select value={watch('campaignType')} onValueChange={(value) => setValue('campaignType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select campaign type" />
                </SelectTrigger>
                <SelectContent>
                  {campaignTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.campaignType && <p className="text-red-500 text-sm">{errors.campaignType.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience Size</Label>
              <Input
                id="targetAudience"
                type="number"
                {...register('targetAudience')}
              />
              {errors.targetAudience && <p className="text-red-500 text-sm">{errors.targetAudience.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedCTR">Expected CTR (%): {watch('expectedCTR')}%</Label>
              <Slider
                value={[watch('expectedCTR')]}
                onValueChange={(value) => setValue('expectedCTR', value[0])}
                max={10}
                min={0.1}
                step={0.1}
                className="w-full"
              />
              {errors.expectedCTR && <p className="text-red-500 text-sm">{errors.expectedCTR.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="avgOrderValue">Average Order Value ($)</Label>
              <Input
                id="avgOrderValue"
                type="number"
                {...register('avgOrderValue')}
              />
              {errors.avgOrderValue && <p className="text-red-500 text-sm">{errors.avgOrderValue.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="conversionRate">Conversion Rate (%): {watch('conversionRate')}%</Label>
              <Slider
                value={[watch('conversionRate')]}
                onValueChange={(value) => setValue('conversionRate', value[0])}
                max={15}
                min={0.1}
                step={0.1}
                className="w-full"
              />
              {errors.conversionRate && <p className="text-red-500 text-sm">{errors.conversionRate.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeframe">Campaign Duration (months): {watch('timeframe')}</Label>
              <Slider
                value={[watch('timeframe')]}
                onValueChange={(value) => setValue('timeframe', value[0])}
                max={24}
                min={1}
                step={1}
                className="w-full"
              />
              {errors.timeframe && <p className="text-red-500 text-sm">{errors.timeframe.message}</p>}
            </div>

            <Button 
              onClick={handleSubmit(handleCalculate)} 
              disabled={loading}
              className="w-full bg-gradient-orange hover:bg-gradient-orange/90"
              size="lg"
            >
              {loading ? 'Calculating...' : 'Calculate ROI'}
            </Button>
            {apiError && <p className="text-destructive text-sm mt-2">{apiError}</p>}
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center font-clash">
              <TrendingUp className="w-5 h-5 mr-2" />
              Projected Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {showResults ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      ${results.totalInvestment.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Investment</div>
                  </div>
                  
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      ${results.expectedRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Expected Revenue</div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                  <div className={`text-4xl font-bold mb-2 ${getROIColor(results.roi)}`}>
                    {results.roi.toFixed(1)}%
                  </div>
                  <div className="text-lg font-medium text-foreground">Return on Investment</div>
                  <Badge className="mt-2 bg-gradient-orange">
                    {results.roi >= 200 ? 'Excellent' : results.roi >= 100 ? 'Good' : results.roi >= 0 ? 'Average' : 'Poor'}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Expected Leads</span>
                    <span className="font-bold">{results.expectedLeads.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Expected Customers</span>
                    <span className="font-bold">{results.expectedCustomers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">ROAS</span>
                    <span className="font-bold">{results.roas.toFixed(2)}x</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Break-even Point</span>
                    <span className="font-bold">{results.breakEvenPoint.toFixed(1)} months</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Monthly ROI</span>
                    <span className="font-bold">{results.monthlyROI.toFixed(1)}%</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Optimization Tips:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    {results.roi < 100 && <li>• Consider increasing your conversion rate through A/B testing</li>}
                    {results.breakEvenPoint > 6 && <li>• Focus on improving your average order value</li>}
                    {watch('expectedCTR') < 2 && <li>• Optimize your ad creative to improve click-through rates</li>}
                    <li>• Test different audience segments to find the most profitable customers</li>
                  </ul>
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-muted-foreground py-12">
                <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Enter your campaign details and click "Calculate ROI" to see your projections</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Integration point: Set VITE_ROI_API_URL in your .env file to your backend endpoint. */}
    </div>
  );
}