import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="flex justify-center space-x-4">
                <a href="/dashboard" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
                <a href="/team" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
                <a href="/projects" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
                <a href="/reports" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
            </nav>
        </div>
    );
};

export default Navbar;