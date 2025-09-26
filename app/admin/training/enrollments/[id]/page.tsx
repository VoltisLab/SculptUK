'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../../components/admin/AdminLayout';

interface Enrollment {
    id: number;
    studentName: string;
    studentEmail: string;
    studentPhone: string;
    enrollmentDate: string;
    status: 'active' | 'completed' | 'cancelled' | 'pending';
    paymentStatus: 'paid' | 'pending' | 'failed';
    notes?: string;
    progress: number;
}

interface Course {
    id: number;
    title: string;
    duration: string;
    level: string;
    price: string;
}

const CourseEnrollments: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const courseId = params.id as string;
    
    const [course, setCourse] = useState<Course | null>(null);
    const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newEnrollment, setNewEnrollment] = useState({
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        status: 'pending' as const,
        paymentStatus: 'pending' as const,
        notes: ''
    });

    // Mock data for courses and enrollments
    const mockCourses = {
        '1': {
            id: 1,
            title: "Foundation Course in Aesthetic Medicine",
            duration: "3 Days",
            level: "Beginner",
            price: "£1,299"
        },
        '2': {
            id: 2,
            title: "Advanced Dermal Filler Masterclass",
            duration: "2 Days",
            level: "Intermediate",
            price: "£899"
        },
        '3': {
            id: 3,
            title: "Anti-Wrinkle Treatment Specialist",
            duration: "1 Day",
            level: "Intermediate",
            price: "£599"
        },
        '4': {
            id: 4,
            title: "Business Development in Aesthetics",
            duration: "1 Day",
            level: "All Levels",
            price: "£399"
        }
    };

    const mockEnrollments = {
        '1': [
            {
                id: 1,
                studentName: 'Dr. Sarah Mitchell',
                studentEmail: 'sarah.mitchell@clinic.com',
                studentPhone: '+44 7123 456789',
                enrollmentDate: '2024-09-15',
                status: 'active' as const,
                paymentStatus: 'paid' as const,
                notes: 'Experienced practitioner looking to expand skills',
                progress: 75
            },
            {
                id: 2,
                studentName: 'Lisa Thompson',
                studentEmail: 'lisa.t@beautystudio.co.uk',
                studentPhone: '+44 7987 654321',
                enrollmentDate: '2024-09-20',
                status: 'active' as const,
                paymentStatus: 'paid' as const,
                notes: 'New to aesthetic medicine',
                progress: 45
            },
            {
                id: 3,
                studentName: 'Mark Johnson',
                studentEmail: 'mark.johnson@gmail.com',
                studentPhone: '+44 7456 123987',
                enrollmentDate: '2024-09-22',
                status: 'pending' as const,
                paymentStatus: 'pending' as const,
                notes: 'Awaiting payment confirmation',
                progress: 0
            }
        ],
        '2': [
            {
                id: 4,
                studentName: 'Dr. Emma Wilson',
                studentEmail: 'emma.wilson@medclinic.com',
                studentPhone: '+44 7234 567890',
                enrollmentDate: '2024-09-18',
                status: 'completed' as const,
                paymentStatus: 'paid' as const,
                notes: 'Excellent participant, completed with distinction',
                progress: 100
            },
            {
                id: 5,
                studentName: 'Rachel Green',
                studentEmail: 'rachel.green@spa.co.uk',
                studentPhone: '+44 7345 678901',
                enrollmentDate: '2024-09-25',
                status: 'active' as const,
                paymentStatus: 'paid' as const,
                notes: 'Very engaged student',
                progress: 60
            }
        ],
        '3': [
            {
                id: 6,
                studentName: 'James Brown',
                studentEmail: 'j.brown@aesthetic.com',
                studentPhone: '+44 7567 890123',
                enrollmentDate: '2024-09-21',
                status: 'active' as const,
                paymentStatus: 'paid' as const,
                notes: 'Quick learner with prior experience',
                progress: 80
            }
        ]
    };

    useEffect(() => {
        // Load course and enrollment data
        const courseData = mockCourses[courseId as keyof typeof mockCourses];
        const enrollmentData = mockEnrollments[courseId as keyof typeof mockEnrollments] || [];
        
        if (courseData) {
            setCourse(courseData);
            setEnrollments(enrollmentData);
        }
        setLoading(false);
    }, [courseId]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'completed': return 'bg-blue-100 text-blue-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPaymentStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'failed': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleAddEnrollment = (e: React.FormEvent) => {
        e.preventDefault();
        const newId = Math.max(...enrollments.map(e => e.id)) + 1;
        const enrollment: Enrollment = {
            ...newEnrollment,
            id: newId,
            enrollmentDate: new Date().toISOString().split('T')[0],
            progress: 0
        };
        
        setEnrollments([...enrollments, enrollment]);
        setShowAddModal(false);
        setNewEnrollment({
            studentName: '',
            studentEmail: '',
            studentPhone: '',
            status: 'pending',
            paymentStatus: 'pending',
            notes: ''
        });
        alert('Enrollment added successfully!');
    };

    const updateEnrollmentStatus = (id: number, status: Enrollment['status']) => {
        setEnrollments(enrollments.map(enrollment => 
            enrollment.id === id ? { ...enrollment, status } : enrollment
        ));
    };

    const updatePaymentStatus = (id: number, paymentStatus: Enrollment['paymentStatus']) => {
        setEnrollments(enrollments.map(enrollment => 
            enrollment.id === id ? { ...enrollment, paymentStatus } : enrollment
        ));
    };

    const deleteEnrollment = (id: number) => {
        if (confirm('Are you sure you want to delete this enrollment?')) {
            setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
        }
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
            </AdminLayout>
        );
    }

    if (!course) {
        return (
            <AdminLayout>
                <div className="text-center py-12">
                    <h1 className="text-2xl font-semibold text-gray-900">Course not found</h1>
                    <button
                        onClick={() => router.push('/admin/training')}
                        className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                    >
                        Back to Training
                    </button>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-light text-gray-900 mb-2">Course Enrollments</h1>
                        <p className="text-gray-600 mb-1">{course.title}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Duration: {course.duration}</span>
                            <span>Level: {course.level}</span>
                            <span>Price: {course.price}</span>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Enrollment
                        </button>
                        <button
                            onClick={() => router.push('/admin/training')}
                            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Back to Training
                        </button>
                    </div>
                </div>
            </div>

            {/* Enrollments Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-900">{enrollments.length}</p>
                        <p className="text-sm text-gray-600">Total Enrollments</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-green-600">
                            {enrollments.filter(e => e.status === 'active').length}
                        </p>
                        <p className="text-sm text-gray-600">Active Students</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-blue-600">
                            {enrollments.filter(e => e.status === 'completed').length}
                        </p>
                        <p className="text-sm text-gray-600">Completed</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-yellow-600">
                            {enrollments.filter(e => e.paymentStatus === 'pending').length}
                        </p>
                        <p className="text-sm text-gray-600">Pending Payment</p>
                    </div>
                </div>
            </div>

            {/* Enrollments List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-medium text-gray-900">Student Enrollments</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Enrollment Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Payment
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Progress
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {enrollments.map((enrollment) => (
                                <tr key={enrollment.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{enrollment.studentName}</div>
                                            <div className="text-sm text-gray-500">{enrollment.studentEmail}</div>
                                            <div className="text-sm text-gray-500">{enrollment.studentPhone}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <select
                                            value={enrollment.status}
                                            onChange={(e) => updateEnrollmentStatus(enrollment.id, e.target.value as Enrollment['status'])}
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(enrollment.status)}`}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="active">Active</option>
                                            <option value="completed">Completed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <select
                                            value={enrollment.paymentStatus}
                                            onChange={(e) => updatePaymentStatus(enrollment.id, e.target.value as Enrollment['paymentStatus'])}
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(enrollment.paymentStatus)}`}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="paid">Paid</option>
                                            <option value="failed">Failed</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                                <div 
                                                    className="bg-blue-600 h-2 rounded-full" 
                                                    style={{ width: `${enrollment.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-700">{enrollment.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                        <button
                                            onClick={() => alert(`View details for ${enrollment.studentName}`)}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => deleteEnrollment(enrollment.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {enrollments.length === 0 && (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No enrollments</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by adding the first student enrollment.</p>
                        <div className="mt-6">
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                            >
                                Add First Enrollment
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Add Enrollment Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white max-w-md">
                        <form onSubmit={handleAddEnrollment} className="mt-3">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4 text-center">Add New Enrollment</h3>
                            <div className="mt-4 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Student Name *"
                                    required
                                    value={newEnrollment.studentName}
                                    onChange={(e) => setNewEnrollment(prev => ({ ...prev, studentName: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    required
                                    value={newEnrollment.studentEmail}
                                    onChange={(e) => setNewEnrollment(prev => ({ ...prev, studentEmail: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={newEnrollment.studentPhone}
                                    onChange={(e) => setNewEnrollment(prev => ({ ...prev, studentPhone: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <textarea
                                    placeholder="Notes (optional)"
                                    value={newEnrollment.notes}
                                    onChange={(e) => setNewEnrollment(prev => ({ ...prev, notes: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    rows={2}
                                />
                            </div>
                            <div className="items-center px-4 py-3">
                                <div className="flex space-x-3">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    >
                                        Add Enrollment
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                        className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default CourseEnrollments;