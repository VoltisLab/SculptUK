'use client';

import React, { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';

interface Appointment {
    id: number;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    service: string;
    date: string;
    time: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    notes?: string;
    createdAt: string;
}

const CalendarAdmin: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState<Appointment[]>([
        {
            id: 1,
            clientName: 'Sarah Johnson',
            clientEmail: 'sarah@email.com',
            clientPhone: '+44 7123 456789',
            service: 'Facial Balancing',
            date: '2024-09-26',
            time: '10:00',
            status: 'confirmed',
            notes: 'First-time client, discussed expectations',
            createdAt: '2024-09-20'
        },
        {
            id: 2,
            clientName: 'Emma Wilson',
            clientEmail: 'emma.w@email.com',
            clientPhone: '+44 7987 654321',
            service: 'Anti-Wrinkle Treatment',
            date: '2024-09-26',
            time: '14:30',
            status: 'pending',
            createdAt: '2024-09-25'
        },
        {
            id: 3,
            clientName: 'James Miller',
            clientEmail: 'j.miller@email.com',
            clientPhone: '+44 7456 123987',
            service: 'Skin Rejuvenation',
            date: '2024-09-27',
            time: '11:00',
            status: 'confirmed',
            notes: 'Follow-up appointment',
            createdAt: '2024-09-22'
        }
    ]);

    const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        
        // Add empty cells for days before the month starts
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        
        // Add all days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }
        
        return days;
    };

    const getAppointmentsForDate = (date: Date) => {
        const dateStr = date.toISOString().split('T')[0];
        return appointments.filter(apt => apt.date === dateStr);
    };

    const updateAppointmentStatus = (id: number, status: Appointment['status']) => {
        setAppointments(appointments.map(apt => 
            apt.id === id ? { ...apt, status } : apt
        ));
    };

    const getStatusColor = (status: Appointment['status']) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'confirmed': return 'bg-green-100 text-green-800';
            case 'completed': return 'bg-blue-100 text-blue-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const previousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const todayAppointments = getAppointmentsForDate(new Date());
    const upcomingAppointments = appointments.filter(apt => new Date(apt.date) >= new Date()).slice(0, 5);

    return (
        <AdminLayout>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-light text-gray-900 mb-2">Calendar & Appointments</h1>
                        <p className="text-gray-600">Manage your appointment schedule and bookings</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex rounded-lg border border-gray-300">
                            <button
                                onClick={() => setViewMode('calendar')}
                                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                                    viewMode === 'calendar' 
                                        ? 'bg-gray-900 text-white' 
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                Calendar
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                                    viewMode === 'list' 
                                        ? 'bg-gray-900 text-white' 
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                List
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Calendar/List Area */}
                <div className="lg:col-span-3">
                    {viewMode === 'calendar' ? (
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </h2>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={previousMonth}
                                        className="p-2 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextMonth}
                                        className="p-2 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="grid grid-cols-7 gap-1">
                                {getDaysInMonth(currentDate).map((date, index) => {
                                    if (!date) {
                                        return <div key={index} className="p-2 h-24"></div>;
                                    }
                                    
                                    const dayAppointments = getAppointmentsForDate(date);
                                    const isToday = date.toDateString() === new Date().toDateString();
                                    
                                    return (
                                        <div
                                            key={index}
                                            className={`p-2 h-24 border border-gray-100 cursor-pointer hover:bg-gray-50 ${
                                                isToday ? 'bg-blue-50 border-blue-200' : ''
                                            }`}
                                            onClick={() => setSelectedDate(date)}
                                        >
                                            <div className={`text-sm mb-1 ${isToday ? 'font-semibold text-blue-600' : 'text-gray-700'}`}>
                                                {date.getDate()}
                                            </div>
                                            <div className="space-y-1">
                                                {dayAppointments.slice(0, 2).map(apt => (
                                                    <div
                                                        key={apt.id}
                                                        className="text-xs p-1 bg-gray-100 rounded truncate"
                                                        title={`${apt.time} - ${apt.clientName}`}
                                                    >
                                                        {apt.time} {apt.clientName.split(' ')[0]}
                                                    </div>
                                                ))}
                                                {dayAppointments.length > 2 && (
                                                    <div className="text-xs text-gray-500">
                                                        +{dayAppointments.length - 2} more
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {appointments.map((appointment) => (
                                <div key={appointment.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <h3 className="text-lg font-medium text-gray-900">{appointment.clientName}</h3>
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                                                    {appointment.status}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                                <div>
                                                    <p><strong>Service:</strong> {appointment.service}</p>
                                                    <p><strong>Date & Time:</strong> {new Date(appointment.date).toLocaleDateString()} at {appointment.time}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Email:</strong> {appointment.clientEmail}</p>
                                                    <p><strong>Phone:</strong> {appointment.clientPhone}</p>
                                                </div>
                                            </div>
                                            {appointment.notes && (
                                                <div className="mt-3">
                                                    <p className="text-sm text-gray-600"><strong>Notes:</strong> {appointment.notes}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-2 ml-4">
                                            <select
                                                value={appointment.status}
                                                onChange={(e) => updateAppointmentStatus(appointment.id, e.target.value as Appointment['status'])}
                                                className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="confirmed">Confirmed</option>
                                                <option value="completed">Completed</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Today's Appointments */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Appointments</h3>
                        {todayAppointments.length > 0 ? (
                            <div className="space-y-3">
                                {todayAppointments.map(apt => (
                                    <div key={apt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{apt.clientName}</p>
                                            <p className="text-xs text-gray-600">{apt.time} - {apt.service}</p>
                                        </div>
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(apt.status)}`}>
                                            {apt.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500">No appointments today</p>
                        )}
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Total Appointments</span>
                                <span className="text-sm font-medium text-gray-900">{appointments.length}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Pending</span>
                                <span className="text-sm font-medium text-yellow-600">
                                    {appointments.filter(apt => apt.status === 'pending').length}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Confirmed</span>
                                <span className="text-sm font-medium text-green-600">
                                    {appointments.filter(apt => apt.status === 'confirmed').length}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Completed</span>
                                <span className="text-sm font-medium text-blue-600">
                                    {appointments.filter(apt => apt.status === 'completed').length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default CalendarAdmin;