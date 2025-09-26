'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../../components/admin/AdminLayout';

interface PaymentRecord {
    id: number;
    date: string;
    amount: number;
    method: string;
    status: 'completed' | 'pending' | 'failed' | 'refunded';
    transactionId: string;
    notes?: string;
}

interface ProgressMilestone {
    id: number;
    date: string;
    milestone: string;
    completedBy: string;
    grade?: string;
    notes?: string;
}

interface CommunicationRecord {
    id: number;
    date: string;
    type: 'email' | 'phone' | 'in-person' | 'note';
    subject: string;
    content: string;
    createdBy: string;
}

interface StudentProfile {
    id: number;
    personalInfo: {
        name: string;
        email: string;
        phone: string;
        address?: string;
        dateOfBirth?: string;
        emergencyContact?: string;
        emergencyPhone?: string;
    };
    enrollmentInfo: {
        courseId: number;
        courseName: string;
        enrollmentDate: string;
        startDate: string;
        expectedCompletionDate: string;
        status: 'active' | 'completed' | 'cancelled' | 'pending';
        progress: number;
        totalHours: number;
        completedHours: number;
    };
    paymentInfo: {
        totalAmount: number;
        amountPaid: number;
        amountDue: number;
        paymentPlan: string;
        paymentRecords: PaymentRecord[];
    };
    academicInfo: {
        previousExperience: string;
        qualifications: string[];
        goals: string;
        progressMilestones: ProgressMilestone[];
        currentModule: string;
        overallGrade?: string;
    };
    communications: CommunicationRecord[];
    documents: Array<{
        id: number;
        name: string;
        type: string;
        uploadDate: string;
        size: string;
    }>;
}

const StudentProfileView: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const studentId = params.studentId as string;
    
    const [student, setStudent] = useState<StudentProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'overview' | 'payments' | 'progress' | 'communications' | 'documents'>('overview');
    const [showAddPayment, setShowAddPayment] = useState(false);
    const [showAddNote, setShowAddNote] = useState(false);

    // Mock student data - in real app this would come from database
    const mockStudentData: Record<string, StudentProfile> = {
        '1': {
            id: 1,
            personalInfo: {
                name: 'Dr. Sarah Mitchell',
                email: 'sarah.mitchell@clinic.com',
                phone: '+44 7123 456789',
                address: '45 Harley Street, London, W1G 8QQ',
                dateOfBirth: '1985-03-15',
                emergencyContact: 'James Mitchell (Husband)',
                emergencyPhone: '+44 7987 654321'
            },
            enrollmentInfo: {
                courseId: 1,
                courseName: 'Foundation Course in Aesthetic Medicine',
                enrollmentDate: '2024-09-15',
                startDate: '2024-10-01',
                expectedCompletionDate: '2024-10-03',
                status: 'active',
                progress: 75,
                totalHours: 24,
                completedHours: 18
            },
            paymentInfo: {
                totalAmount: 1299,
                amountPaid: 1299,
                amountDue: 0,
                paymentPlan: 'Full Payment',
                paymentRecords: [
                    {
                        id: 1,
                        date: '2024-09-15',
                        amount: 1299,
                        method: 'Credit Card (****4567)',
                        status: 'completed',
                        transactionId: 'TXN-2024-001234',
                        notes: 'Full course payment'
                    }
                ]
            },
            academicInfo: {
                previousExperience: 'General Practitioner with 8 years experience. Currently running private clinic in Central London.',
                qualifications: ['MBBS - University College London', 'MRCGP - Royal College of General Practitioners', 'Diploma in Dermatology'],
                goals: 'To expand clinic services to include non-surgical aesthetic treatments and build expertise in dermal fillers.',
                currentModule: 'Advanced Injection Techniques',
                overallGrade: 'A',
                progressMilestones: [
                    {
                        id: 1,
                        date: '2024-10-01',
                        milestone: 'Facial Anatomy Assessment',
                        completedBy: 'Dr. Emma Johnson',
                        grade: 'A',
                        notes: 'Excellent understanding of facial anatomy and injection points'
                    },
                    {
                        id: 2,
                        date: '2024-10-02',
                        milestone: 'Basic Injection Techniques',
                        completedBy: 'Dr. Emma Johnson',
                        grade: 'A',
                        notes: 'Demonstrated precise technique and safety protocols'
                    },
                    {
                        id: 3,
                        date: '2024-10-02',
                        milestone: 'Patient Consultation Skills',
                        completedBy: 'Sarah Williams',
                        grade: 'B+',
                        notes: 'Good consultation skills, could improve on discussing aftercare'
                    }
                ]
            },
            communications: [
                {
                    id: 1,
                    date: '2024-09-14',
                    type: 'email',
                    subject: 'Course Confirmation & Pre-Course Materials',
                    content: 'Sent course confirmation email with pre-course reading materials and venue details.',
                    createdBy: 'Admin System'
                },
                {
                    id: 2,
                    date: '2024-09-30',
                    type: 'phone',
                    subject: 'Pre-Course Check-in Call',
                    content: 'Spoke with Dr. Mitchell to confirm attendance and answer questions about practical sessions. She is well-prepared and excited to start.',
                    createdBy: 'Sarah Williams'
                },
                {
                    id: 3,
                    date: '2024-10-01',
                    type: 'in-person',
                    subject: 'Day 1 - Course Introduction',
                    content: 'Excellent engagement during theory sessions. Asked thoughtful questions about contraindications and patient selection.',
                    createdBy: 'Dr. Emma Johnson'
                },
                {
                    id: 4,
                    date: '2024-10-02',
                    type: 'note',
                    subject: 'Practical Skills Assessment',
                    content: 'Demonstrated natural aptitude for injection techniques. Very steady hands and good spatial awareness. Recommended for advanced techniques.',
                    createdBy: 'Dr. Emma Johnson'
                }
            ],
            documents: [
                {
                    id: 1,
                    name: 'Medical Insurance Certificate',
                    type: 'PDF',
                    uploadDate: '2024-09-15',
                    size: '2.4 MB'
                },
                {
                    id: 2,
                    name: 'GMC Registration Certificate',
                    type: 'PDF',
                    uploadDate: '2024-09-15',
                    size: '1.8 MB'
                },
                {
                    id: 3,
                    name: 'Course Completion Certificate',
                    type: 'PDF',
                    uploadDate: '2024-10-03',
                    size: '890 KB'
                },
                {
                    id: 4,
                    name: 'Portfolio Photos - Day 2',
                    type: 'ZIP',
                    uploadDate: '2024-10-02',
                    size: '15.2 MB'
                }
            ]
        },
        '2': {
            id: 2,
            personalInfo: {
                name: 'Lisa Thompson',
                email: 'lisa.t@beautystudio.co.uk',
                phone: '+44 7987 654321',
                address: '78 King\'s Road, Chelsea, London, SW3 4UD',
                dateOfBirth: '1992-07-22',
                emergencyContact: 'Michael Thompson (Brother)',
                emergencyPhone: '+44 7123 987654'
            },
            enrollmentInfo: {
                courseId: 1,
                courseName: 'Foundation Course in Aesthetic Medicine',
                enrollmentDate: '2024-09-20',
                startDate: '2024-10-15',
                expectedCompletionDate: '2024-10-17',
                status: 'active',
                progress: 45,
                totalHours: 24,
                completedHours: 11
            },
            paymentInfo: {
                totalAmount: 1299,
                amountPaid: 650,
                amountDue: 649,
                paymentPlan: '2 Installments',
                paymentRecords: [
                    {
                        id: 1,
                        date: '2024-09-20',
                        amount: 650,
                        method: 'Bank Transfer',
                        status: 'completed',
                        transactionId: 'TXN-2024-001298',
                        notes: 'First installment - 50%'
                    },
                    {
                        id: 2,
                        date: '2024-10-14',
                        amount: 649,
                        method: 'Credit Card (****8901)',
                        status: 'pending',
                        transactionId: 'TXN-2024-001455',
                        notes: 'Second installment - due before course start'
                    }
                ]
            },
            academicInfo: {
                previousExperience: 'Beauty therapist with 5 years experience. Currently working at high-end spa in Chelsea.',
                qualifications: ['NVQ Level 3 Beauty Therapy', 'CIDESCO Diploma', 'Laser Hair Removal Certification'],
                goals: 'To transition into aesthetic medicine and eventually open own clinic specializing in non-surgical treatments.',
                currentModule: 'Dermal Filler Basics',
                progressMilestones: [
                    {
                        id: 1,
                        date: '2024-10-15',
                        milestone: 'Theory Assessment - Facial Anatomy',
                        completedBy: 'Dr. Emma Johnson',
                        grade: 'B',
                        notes: 'Good grasp of basics, needs more confidence with medical terminology'
                    },
                    {
                        id: 2,
                        date: '2024-10-15',
                        milestone: 'Safety Protocols & Hygiene',
                        completedBy: 'Sarah Williams',
                        grade: 'A',
                        notes: 'Excellent attention to safety and cleanliness protocols'
                    }
                ]
            },
            communications: [
                {
                    id: 1,
                    date: '2024-09-20',
                    type: 'email',
                    subject: 'Welcome & Payment Plan Setup',
                    content: 'Confirmed enrollment and set up payment plan. Sent course materials and pre-reading list.',
                    createdBy: 'Admin System'
                },
                {
                    id: 2,
                    date: '2024-10-10',
                    type: 'email',
                    subject: 'Payment Reminder - Second Installment',
                    content: 'Friendly reminder about second installment due October 14th. Provided payment link.',
                    createdBy: 'Finance Team'
                },
                {
                    id: 3,
                    date: '2024-10-15',
                    type: 'in-person',
                    subject: 'Course Day 1 - Initial Assessment',
                    content: 'Lisa is enthusiastic and eager to learn. Good practical skills from beauty therapy background. Needs confidence building in medical aspects.',
                    createdBy: 'Dr. Emma Johnson'
                }
            ],
            documents: [
                {
                    id: 1,
                    name: 'Professional Insurance Policy',
                    type: 'PDF',
                    uploadDate: '2024-09-20',
                    size: '1.9 MB'
                },
                {
                    id: 2,
                    name: 'Beauty Therapy Qualifications',
                    type: 'PDF',
                    uploadDate: '2024-09-20',
                    size: '3.1 MB'
                },
                {
                    id: 3,
                    name: 'Course Progress Portfolio',
                    type: 'PDF',
                    uploadDate: '2024-10-15',
                    size: '4.7 MB'
                }
            ]
        }
    };

    useEffect(() => {
        const studentData = mockStudentData[studentId];
        if (studentData) {
            setStudent(studentData);
        }
        setLoading(false);
    }, [studentId]);

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
            case 'completed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'failed': return 'bg-red-100 text-red-800';
            case 'refunded': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCommunicationIcon = (type: string) => {
        switch (type) {
            case 'email':
                return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
            case 'phone':
                return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
            case 'in-person':
                return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
            case 'note':
                return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
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

    if (!student) {
        return (
            <AdminLayout>
                <div className="text-center py-12">
                    <h1 className="text-2xl font-semibold text-gray-900">Student not found</h1>
                    <button
                        onClick={() => router.back()}
                        className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                    >
                        Go Back
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
                        <h1 className="text-3xl font-light text-gray-900 mb-2">Student Profile</h1>
                        <p className="text-gray-600">{student.personalInfo.name} - {student.enrollmentInfo.courseName}</p>
                    </div>
                    <button
                        onClick={() => router.back()}
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </button>
                </div>
            </div>

            {/* Student Summary Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xl font-semibold text-gray-600">
                                {student.personalInfo.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">{student.personalInfo.name}</h2>
                            <p className="text-gray-600">{student.personalInfo.email}</p>
                            <p className="text-gray-600">{student.personalInfo.phone}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(student.enrollmentInfo.status)}`}>
                            {student.enrollmentInfo.status.toUpperCase()}
                        </span>
                        <p className="text-sm text-gray-600 mt-2">Enrolled: {new Date(student.enrollmentInfo.enrollmentDate).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                    {[
                        { id: 'overview', label: 'Overview', icon: '📋' },
                        { id: 'payments', label: 'Payments', icon: '💳' },
                        { id: 'progress', label: 'Progress', icon: '📈' },
                        { id: 'communications', label: 'Communications', icon: '💬' },
                        { id: 'documents', label: 'Documents', icon: '📁' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === tab.id
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                        <div className="space-y-3">
                            <div><strong>Name:</strong> {student.personalInfo.name}</div>
                            <div><strong>Email:</strong> {student.personalInfo.email}</div>
                            <div><strong>Phone:</strong> {student.personalInfo.phone}</div>
                            <div><strong>Address:</strong> {student.personalInfo.address}</div>
                            <div><strong>Date of Birth:</strong> {student.personalInfo.dateOfBirth}</div>
                            <div><strong>Emergency Contact:</strong> {student.personalInfo.emergencyContact}</div>
                            <div><strong>Emergency Phone:</strong> {student.personalInfo.emergencyPhone}</div>
                        </div>
                    </div>

                    {/* Enrollment Information */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Enrollment Information</h3>
                        <div className="space-y-3">
                            <div><strong>Course:</strong> {student.enrollmentInfo.courseName}</div>
                            <div><strong>Enrollment Date:</strong> {new Date(student.enrollmentInfo.enrollmentDate).toLocaleDateString()}</div>
                            <div><strong>Start Date:</strong> {new Date(student.enrollmentInfo.startDate).toLocaleDateString()}</div>
                            <div><strong>Expected Completion:</strong> {new Date(student.enrollmentInfo.expectedCompletionDate).toLocaleDateString()}</div>
                            <div><strong>Progress:</strong> {student.enrollmentInfo.progress}% ({student.enrollmentInfo.completedHours}/{student.enrollmentInfo.totalHours} hours)</div>
                            <div><strong>Current Module:</strong> {student.academicInfo.currentModule}</div>
                        </div>
                    </div>

                    {/* Academic Background */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Academic Background</h3>
                        <div className="space-y-3">
                            <div>
                                <strong>Previous Experience:</strong>
                                <p className="mt-1 text-gray-600">{student.academicInfo.previousExperience}</p>
                            </div>
                            <div>
                                <strong>Qualifications:</strong>
                                <ul className="mt-1 space-y-1">
                                    {student.academicInfo.qualifications.map((qual, index) => (
                                        <li key={index} className="text-gray-600">• {qual}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <strong>Goals:</strong>
                                <p className="mt-1 text-gray-600">{student.academicInfo.goals}</p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Summary</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span>Total Amount:</span>
                                <span className="font-semibold">£{student.paymentInfo.totalAmount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Amount Paid:</span>
                                <span className="font-semibold text-green-600">£{student.paymentInfo.amountPaid}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Amount Due:</span>
                                <span className={`font-semibold ${student.paymentInfo.amountDue > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                    £{student.paymentInfo.amountDue}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Payment Plan:</span>
                                <span>{student.paymentInfo.paymentPlan}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'payments' && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Payment History</h3>
                        <button
                            onClick={() => setShowAddPayment(true)}
                            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                        >
                            Record Payment
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {student.paymentInfo.paymentRecords.map((payment) => (
                                <div key={payment.id} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <div className="flex items-center space-x-3">
                                                <span className="font-medium">£{payment.amount}</span>
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(payment.status)}`}>
                                                    {payment.status}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {new Date(payment.date).toLocaleDateString()} • {payment.method}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500">ID: {payment.transactionId}</div>
                                        </div>
                                    </div>
                                    {payment.notes && (
                                        <div className="text-sm text-gray-600 mt-2 p-2 bg-gray-50 rounded">
                                            {payment.notes}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'progress' && (
                <div className="space-y-6">
                    {/* Progress Overview */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Progress Overview</h3>
                        <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Course Completion</span>
                                <span>{student.enrollmentInfo.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                    className="bg-blue-600 h-2 rounded-full" 
                                    style={{ width: `${student.enrollmentInfo.progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-semibold text-gray-900">{student.enrollmentInfo.completedHours}</div>
                                <div className="text-sm text-gray-600">Hours Completed</div>
                            </div>
                            <div>
                                <div className="text-2xl font-semibold text-gray-900">{student.enrollmentInfo.totalHours - student.enrollmentInfo.completedHours}</div>
                                <div className="text-sm text-gray-600">Hours Remaining</div>
                            </div>
                            <div>
                                <div className="text-2xl font-semibold text-gray-900">{student.academicInfo.overallGrade || 'N/A'}</div>
                                <div className="text-sm text-gray-600">Current Grade</div>
                            </div>
                        </div>
                    </div>

                    {/* Milestones */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Progress Milestones</h3>
                        <div className="space-y-4">
                            {student.academicInfo.progressMilestones.map((milestone) => (
                                <div key={milestone.id} className="border-l-4 border-blue-500 pl-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-gray-900">{milestone.milestone}</h4>
                                            <p className="text-sm text-gray-600">
                                                {new Date(milestone.date).toLocaleDateString()} • Assessed by {milestone.completedBy}
                                            </p>
                                        </div>
                                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                            {milestone.grade}
                                        </span>
                                    </div>
                                    {milestone.notes && (
                                        <p className="text-sm text-gray-600 mt-2 p-2 bg-gray-50 rounded">{milestone.notes}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'communications' && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Communication History</h3>
                        <button
                            onClick={() => setShowAddNote(true)}
                            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                        >
                            Add Note
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {student.communications.map((comm) => (
                                <div key={comm.id} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 mt-1 text-gray-400">
                                            {getCommunicationIcon(comm.type)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-medium text-gray-900">{comm.subject}</h4>
                                                <div className="text-sm text-gray-500">
                                                    {new Date(comm.date).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">{comm.content}</p>
                                            <div className="text-xs text-gray-500">
                                                By {comm.createdBy} • {comm.type.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'documents' && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Documents & Files</h3>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 gap-4">
                            {student.documents.map((doc) => (
                                <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">{doc.name}</h4>
                                            <p className="text-sm text-gray-600">{doc.type} • {doc.size} • Uploaded {new Date(doc.uploadDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">View</button>
                                        <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">Download</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default StudentProfileView;