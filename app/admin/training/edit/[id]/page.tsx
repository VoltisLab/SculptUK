'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../../components/admin/AdminLayout';

interface CourseFormData {
    title: string;
    duration: string;
    level: string;
    description: string;
    price: string;
    includes: string[];
    status: 'active' | 'draft';
}

const EditCourse: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const courseId = params.id as string;
    
    const [formData, setFormData] = useState<CourseFormData>({
        title: '',
        duration: '',
        level: 'Beginner',
        description: '',
        price: '',
        includes: [],
        status: 'active'
    });
    const [currentInclude, setCurrentInclude] = useState('');
    const [loading, setLoading] = useState(true);

    // Mock data for courses - in real app this would come from database
    const mockCourses = {
        '1': {
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
            status: 'active' as const
        },
        '2': {
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
            status: 'active' as const
        },
        '3': {
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
            status: 'active' as const
        },
        '4': {
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
            status: 'draft' as const
        }
    };

    useEffect(() => {
        // Load course data
        const course = mockCourses[courseId as keyof typeof mockCourses];
        if (course) {
            setFormData(course);
        }
        setLoading(false);
    }, [courseId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically save to database
        console.log('Updating course:', courseId, formData);
        alert('Course updated successfully!');
        router.push('/admin/training');
    };

    const addInclude = () => {
        if (currentInclude.trim() && !formData.includes.includes(currentInclude.trim())) {
            setFormData(prev => ({
                ...prev,
                includes: [...prev.includes, currentInclude.trim()]
            }));
            setCurrentInclude('');
        }
    };

    const removeInclude = (index: number) => {
        setFormData(prev => ({
            ...prev,
            includes: prev.includes.filter((_, i) => i !== index)
        }));
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

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-light text-gray-900 mb-2">Edit Course</h1>
                <p className="text-gray-600">Modify course details and settings</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Course Details</h2>
                        
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Course Title *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="e.g., Foundation Course in Aesthetic Medicine"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Duration *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.duration}
                                        onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., 3 Days"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Level *
                                    </label>
                                    <select
                                        value={formData.level}
                                        onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                        <option value="All Levels">All Levels</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Price *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.price}
                                        onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., £1,299"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Detailed description of the course..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Course Includes
                                </label>
                                <div className="flex space-x-2 mb-3">
                                    <input
                                        type="text"
                                        value={currentInclude}
                                        onChange={(e) => setCurrentInclude(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInclude())}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., Facial anatomy masterclass"
                                    />
                                    <button
                                        type="button"
                                        onClick={addInclude}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {formData.includes.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                                        >
                                            <span className="text-sm text-gray-700">{item}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeInclude(index)}
                                                className="text-red-500 hover:text-red-700 ml-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as 'active' | 'draft' }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="active">Active</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => router.push('/admin/training')}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Update Course
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default EditCourse;