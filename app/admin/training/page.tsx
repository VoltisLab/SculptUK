'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';

interface Course {
    id: number;
    title: string;
    duration: string;
    level: string;
    description: string;
    price: string;
    includes: string[];
    status: 'active' | 'draft';
    enrollments: number;
    createdAt: string;
}

const TrainingAdmin: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([
        {
            id: 1,
            title: "Foundation Course in Aesthetic Medicine",
            duration: "3 Days",
            level: "Beginner",
            description: "Comprehensive introduction to non-surgical aesthetic treatments including anatomy, safety protocols, and basic injection techniques.",
            price: "£1,299",
            includes: [
                "Facial anatomy masterclass",
                "Product knowledge and selection",
                "Injection techniques and safety",
                "Patient consultation skills",
                "Certificate of completion",
                "Ongoing mentorship for 3 months"
            ],
            status: 'active',
            enrollments: 24,
            createdAt: '2024-01-15'
        },
        {
            id: 2,
            title: "Advanced Dermal Filler Masterclass",
            duration: "2 Days",
            level: "Intermediate",
            description: "Advanced techniques for facial contouring and volumization using premium dermal fillers.",
            price: "£899",
            includes: [
                "Advanced injection patterns",
                "Complication management",
                "Natural enhancement techniques",
                "Hands-on practice with models",
                "Advanced certification",
                "Professional portfolio development"
            ],
            status: 'active',
            enrollments: 18,
            createdAt: '2024-01-10'
        },
        {
            id: 3,
            title: "Anti-Wrinkle Treatment Specialist",
            duration: "1 Day",
            level: "Intermediate",
            description: "Master the art of neurotoxin treatments for facial rejuvenation and wrinkle prevention.",
            price: "£599",
            includes: [
                "Precise injection mapping",
                "Dosage calculations",
                "Natural-looking results techniques",
                "Client aftercare protocols",
                "Specialist certification",
                "6-month support program"
            ],
            status: 'active',
            enrollments: 31,
            createdAt: '2024-01-08'
        },
        {
            id: 4,
            title: "Business Development in Aesthetics",
            duration: "1 Day",
            level: "All Levels",
            description: "Build and grow your aesthetic practice with proven business strategies and marketing techniques.",
            price: "£399",
            includes: [
                "Practice setup and regulations",
                "Marketing and client acquisition",
                "Pricing strategies",
                "Insurance and legal requirements",
                "Online presence development",
                "Business mentorship"
            ],
            status: 'draft',
            enrollments: 8,
            createdAt: '2024-01-05'
        }
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        setCourses(courses.filter(course => course.id !== id));
        setShowDeleteModal(null);
    };

    const toggleStatus = (id: number) => {
        setCourses(courses.map(course => 
            course.id === id 
                ? { ...course, status: course.status === 'active' ? 'draft' : 'active' }
                : course
        ));
    };

    const getLevelColor = (level: string) => {
        switch (level.toLowerCase()) {
            case 'beginner': return 'bg-green-100 text-green-800';
            case 'intermediate': return 'bg-yellow-100 text-yellow-800';
            case 'advanced': return 'bg-red-100 text-red-800';
            default: return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <AdminLayout>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-light text-gray-900 mb-2">Training Management</h1>
                        <p className="text-gray-600">Manage your training courses and programs</p>
                    </div>
                    <Link 
                        href="/admin/training/new"
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add New Course
                    </Link>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(course.level)}`}>
                                        {course.level}
                                    </span>
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        course.status === 'active' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {course.status}
                                    </span>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-1">{course.title}</h3>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {course.duration}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        {course.enrollments} enrolled
                                    </span>
                                </div>
                            </div>
                            <div className="text-right ml-4">
                                <div className="text-lg font-semibold text-gray-900">{course.price}</div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                        {/* Includes Summary */}
                        <div className="mb-4">
                            <p className="text-xs font-medium text-gray-700 mb-2">Includes ({course.includes.length} items)</p>
                            <div className="flex flex-wrap gap-1">
                                {course.includes.slice(0, 3).map((item, index) => (
                                    <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                        {item.length > 20 ? `${item.substring(0, 20)}...` : item}
                                    </span>
                                ))}
                                {course.includes.length > 3 && (
                                    <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                        +{course.includes.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="text-xs text-gray-500 mb-4">
                            Created: {new Date(course.createdAt).toLocaleDateString()}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div className="flex space-x-3">
                                <Link
                                    href={`/admin/training/edit/${course.id}`}
                                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => toggleStatus(course.id)}
                                    className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                                >
                                    {course.status === 'active' ? 'Deactivate' : 'Activate'}
                                </button>
                                <Link
                                    href={`/admin/training/enrollments/${course.id}`}
                                    className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                                >
                                    Enrollments
                                </Link>
                            </div>
                            <button
                                onClick={() => setShowDeleteModal(course.id)}
                                className="text-red-600 hover:text-red-900 text-sm font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Delete Course</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    Are you sure you want to delete this course? This will also remove all enrollments. This action cannot be undone.
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleDelete(showDeleteModal)}
                                        className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => setShowDeleteModal(null)}
                                        className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default TrainingAdmin;