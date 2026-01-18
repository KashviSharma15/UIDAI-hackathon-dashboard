import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Baby, Fingerprint, FileText, UserCheck, ArrowRight } from 'lucide-react';

const LifecycleStep = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex-1 relative min-h-[200px] flex flex-col items-center text-center z-10"
    >
        <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-600">
            <Icon size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const ConnectionLine = ({ delay }) => (
    <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay }}
        className="hidden lg:block absolute top-[100px] left-0 w-full h-[2px] bg-brand-200 -z-0 origin-left"
    />
);

const Lifecycle = () => {
    return (
        <Layout title="Aadhaar Lifecycle">
            <div className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">From Birth to Authenticated Citizen</h2>
                <p className="text-slate-500">
                    The journey of an Aadhaar holder involves multiple stages of enrolment and mandatory biometric updates
                    to ensure data accuracy and security throughout their life.
                </p>
            </div>

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 mt-16 px-4">
                <LifecycleStep
                    title="Enrolment (Age 0-5)"
                    description="Aadhaar generated linked to parent's UID. No biometrics capture initially."
                    icon={Baby}
                    delay={0.2}
                />

                <div className="hidden lg:flex items-center justify-center text-brand-300">
                    <ArrowRight size={32} />
                </div>

                <LifecycleStep
                    title="Mandatory Update (Age 5)"
                    description="First biometric capture (Iris, Fingerprints & Photo). Transition to child's own biometrics."
                    icon={Fingerprint}
                    delay={0.4}
                />

                <div className="hidden lg:flex items-center justify-center text-brand-300">
                    <ArrowRight size={32} />
                </div>

                <LifecycleStep
                    title="Mandatory Update (Age 15)"
                    description="Final mandatory biometric update to capture adult biometrics."
                    icon={UserCheck}
                    delay={0.6}
                />

                <div className="hidden lg:flex items-center justify-center text-brand-300">
                    <ArrowRight size={32} />
                </div>

                <LifecycleStep
                    title="Demographic Updates"
                    description="Continuous updates for Address, Mobile, Email, etc. throughout adulthood."
                    icon={FileText}
                    delay={0.8}
                />
            </div>

            <div className="mt-16 bg-brand-50 rounded-xl p-8 border border-brand-100">
                <h3 className="text-xl font-bold text-brand-900 mb-4">Lifecycle Insights based on Data</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-slate-500 mb-1">Child Updates (Age 5-17)</p>
                        <p className="text-2xl font-bold text-slate-800">High Volume</p>
                        <p className="text-xs text-brand-600 mt-1">Driving 64% of biometric workload</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-slate-500 mb-1">Adult Updates (18+)</p>
                        <p className="text-2xl font-bold text-slate-800">Demographic Dominant</p>
                        <p className="text-xs text-brand-600 mt-1">90% of demographic changes are from adults</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-slate-500 mb-1">Correction Patterns</p>
                        <p className="text-2xl font-bold text-slate-800">Steady Growth</p>
                        <p className="text-xs text-brand-600 mt-1">Consistent month-over-month increase</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Lifecycle;
