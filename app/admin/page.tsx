'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard: React.FC = () => {
    const [stats] = useState({
        totalServices: 4,
        totalCourses: 4,
        totalImages: 9,
        pendingAppointments: 12,
        monthlyBookings: 45,
        revenue: 15750
    });

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-light text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600">Welcome back to your SculptUK admin panel</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Services</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalServices}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-green-50 rounded-lg">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Training Courses</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalCourses}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Gallery Images</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalImages}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-yellow-50 rounded-lg">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Pending Appointments</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.pendingAppointments}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-indigo-50 rounded-lg">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Monthly Bookings</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.monthlyBookings}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-red-50 rounded-lg">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Revenue</p>
                            <p className="text-2xl font-semibold text-gray-900">£{stats.revenue.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <Link href="/admin/services/new" className="flex items-center p-3 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add New Service
                        </Link>
                        <Link href="/admin/training/new" className="flex items-center p-3 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add New Course
                        </Link>
                        <Link href="/admin/gallery/upload" className="flex items-center p-3 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            Upload Images
                        </Link>
                        <Link href="/admin/calendar" className="flex items-center p-3 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            View Calendar
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">New appointment booked</p>
                                <p className="text-xs text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">Service updated: Facial Balancing</p>
                                <p className="text-xs text-gray-500">5 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">New images added to gallery</p>
                                <p className="text-xs text-gray-500">1 day ago</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">Training course inquiry received</p>
                                <p className="text-xs text-gray-500">2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;