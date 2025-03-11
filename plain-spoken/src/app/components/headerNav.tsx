"use client";

import { Divider, Link } from '@heroui/react';
import { usePathname } from 'next/navigation';
import React from 'react';


export default function HeaderNav() {

    const pathname = usePathname();

    return (
        <div className="grid grid-cols-6">
            <h1 className="col-span-6 text-3xl w-full text-center py-5 font-semibold">
                Plainly Spoken
            </h1>
            <Divider className="col-start-2 col-span-4 my-5 bg-slate-600" />
            <div className="col-start-3 col-span-2 grid grid-cols-4">
                <div className="px-1 text-center">
                    <Link isBlock href="/" underline="hover" isDisabled={pathname === "/"} className="text-center">Home</Link>
                </div>
                <div className="px-1 text-center">
                    <Link isBlock href="/ExecutiveOrders" underline="hover" isDisabled={pathname === "/ExecutiveOrders"} className="text-center">Executive<br />Orders</Link>
                </div>
                <div className="px-1 text-center">
                    <Link isBlock href="/ProjectPS" underline="hover" isDisabled={pathname === "/ProjectPS"} className="text-center">Project PS</Link>
                </div>
                <div className="px-1 text-center">
                    <Link isBlock href="/About" underline="hover" isDisabled={pathname === "/About"} className="text-center">About</Link>
                </div>
            </div>
        </div>
    );
  }