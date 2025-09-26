'use client';

import React, { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';

interface AnalyticsData {
    website: {
        totalVisitors: number;
        pageViews: number;
        bounceRate: number;
        avgSessionDuration: string;
        topPages: Array<{ page: string; views: number }>;
        deviceTypes: Array<{ device: string; percentage: number }>;
        trafficSources: Array<{ source: string; visitors: number }>;
    };
    business: {
        totalAppointments: number;
        completedAppointments: number;
        cancelledAppointments: number;
        revenue: number;
        averageBookingValue: number;
        topServices: Array<{ service: string; bookings: number; revenue: number }>;
        monthlyGrowth: number;
    };
}

const AnalyticsAdmin: React.FC = () => {
    const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
    const [analyticsData] = useState<AnalyticsData>({
        website: {
            totalVisitors: 2847,
            pageViews: 8421,
            bounceRate: 24.5,
            avgSessionDuration: '3:42',
            topPages: [
                { page: '/services', views: 1842 },
                { page: '/', views: 1623 },
                { page: '/gallery', views: 987 },
                { page: '/training', views: 756 },
                { page: '/about', views: 543 }
            ],
            deviceTypes: [
                { device: 'Desktop', percentage: 52 },
                { device: 'Mobile', percentage: 41 },
                { device: 'Tablet', percentage: 7 }
            ],
            trafficSources: [
                { source: 'Organic Search', visitors: 1523 },
                { source: 'Direct', visitors: 892 },
                { source: 'Social Media', visitors: 312 },
                { source: 'Referral', visitors: 120 }
            ]
        },
        business: {
            totalAppointments: 156,
            completedAppointments: 142,
            cancelledAppointments: 14,
            revenue: 18750,
            averageBookingValue: 132,
            topServices: [
                { service: 'Facial Balancing', bookings: 45, revenue: 6750 },
                { service: 'Anti-Wrinkle Treatment', bookings: 38, revenue: 4560 },
                { service: 'Skin Rejuvenation', bookings: 32, revenue: 4480 },
                { service: 'Non-Surgical Enhancement', bookings: 27, revenue: 2960 }
            ],
            monthlyGrowth: 18.5
        }
    });

    const timeRanges = [
        { value: '7d', label: 'Last 7 days' },
        { value: '30d', label: 'Last 30 days' },
        { value: '90d', label: 'Last 3 months' },
        { value: '1y', label: 'Last year' }
    ];

    const getGrowthColor = (growth: number) => {
        if (growth > 0) return 'text-green-600';
        if (growth < 0) return 'text-red-600';
        return 'text-gray-600';
    };

    return (
        <AdminLayout>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-light text-gray-900 mb-2">Analytics Dashboard</h1>
                        <p className="text-gray-600">Track your business performance and website metrics</p>
                    </div>
                    <div>
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value as any)}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {timeRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                    {range.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Visitors</p>
                            <p className="text-2xl font-semibold text-gray-900">{analyticsData.website.totalVisitors.toLocaleString()}</p>
                            <p className="text-xs text-green-600">+12.5% from last period</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-green-50 rounded-lg">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Appointments</p>
                            <p className="text-2xl font-semibold text-gray-900">{analyticsData.business.totalAppointments}</p>
                            <p className={`text-xs ${getGrowthColor(analyticsData.business.monthlyGrowth)}`}>
                                +{analyticsData.business.monthlyGrowth}% growth
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Revenue</p>
                            <p className="text-2xl font-semibold text-gray-900">£{analyticsData.business.revenue.toLocaleString()}</p>
                            <p className="text-xs text-green-600">+8.2% from last period</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-yellow-50 rounded-lg">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Avg. Booking Value</p>
                            <p className="text-2xl font-semibold text-gray-900">£{analyticsData.business.averageBookingValue}</p>
                            <p className="text-xs text-red-600">-2.1% from last period</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Website Performance */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-6">Website Performance</h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <p className="text-2xl font-semibold text-gray-900">{analyticsData.website.pageViews.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">Page Views</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <p className="text-2xl font-semibold text-gray-900">{analyticsData.website.bounceRate}%</p>
                            <p className="text-sm text-gray-600">Bounce Rate</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Top Pages</h3>
                            <div className="space-y-2">
                                {analyticsData.website.topPages.map((page, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">{page.page}</span>
                                        <span className="text-sm font-medium text-gray-900">{page.views.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Performance */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-6">Business Performance</h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <p className="text-2xl font-semibold text-green-600">{analyticsData.business.completedAppointments}</p>
                            <p className="text-sm text-gray-600">Completed</p>
                        </div>
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                            <p className="text-2xl font-semibold text-red-600">{analyticsData.business.cancelledAppointments}</p>
                            <p className="text-sm text-gray-600">Cancelled</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Top Services</h3>
                        <div className="space-y-3">
                            {analyticsData.business.topServices.map((service, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{service.service}</p>
                                        <p className="text-xs text-gray-600">{service.bookings} bookings</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-gray-900">£{service.revenue.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Traffic Sources and Device Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Traffic Sources */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-6">Traffic Sources</h2>
                    <div className="space-y-4">
                        {analyticsData.website.trafficSources.map((source, index) => {
                            const percentage = (source.visitors / analyticsData.website.totalVisitors * 100).toFixed(1);
                            return (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">{source.source}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">{source.visitors.toLocaleString()}</p>
                                        <p className="text-xs text-gray-500">{percentage}%</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Device Types */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-6">Device Types</h2>
                    <div className="space-y-4">
                        {analyticsData.website.deviceTypes.map((device, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-2 h-2 rounded-full ${
                                        device.device === 'Desktop' ? 'bg-green-500' :
                                        device.device === 'Mobile' ? 'bg-blue-500' : 'bg-purple-500'
                                    }`}></div>
                                    <span className="text-sm text-gray-700">{device.device}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-900">{device.percentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Average Session Duration</span>
                            <span className="font-medium text-gray-900">{analyticsData.website.avgSessionDuration}</span>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AnalyticsAdmin;