import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../components/Button';

const SideBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarAnimation = useRef<gsap.core.Tween | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarAnimation.current = gsap.fromTo(
        sidebarRef.current,
        { x: -sidebarRef.current.offsetWidth },
        { x: 0, duration: 0.3, ease: 'power2.out' }
      );

      
      sidebarAnimation.current.pause();
    }
  }, []);

  useEffect(() => {
    if (sidebarAnimation.current) {
      if (isSidebarOpen) {
        sidebarAnimation.current.play(); 
      } else {
        sidebarAnimation.current.reverse(); 
      }
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center mt-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-500/50"
        onClick={toggleSidebar}
      >
        <Icon icon="solar:hamburger-menu-bold" width="45" height="45" className="text-darkpurple" />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        ref={sidebarRef}
        className="fixed top-17 left-1 z-40 w-46 h-5/6 bg-gradient-to-r to-[#6A1799] from-[#230833] rounded-xl ring-2 ring-gray-300/50 md:hidden"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium ">
            <li>
              <a
                href="#"
                className="flex items-center py-2 text-gray-200 rounded-lg group"
              >
            <span className="">

                <Button name='OverView' />
            </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-2 text-gray-200 rounded-lg group"
              >
                <span className="">
                <Button name='Create Team' isActive/>

                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-2 text-gray-200 rounded-lg group"
              >
                <span className="">
                <Button name='Prizes' isActive/>

                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-2 text-gray-200 rounded-lg group"
              >
                <span className="">
                <Button name='FAQs' isActive/>

                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-2 text-gray-200 rounded-lg  group"
              >
                <span className="">
                  <Button name='Judging' isActive/>

                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-2 text-gray-200 rounded-lg group"
              >
                <span className="">
                  <Button name='Resources' isActive/>

                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;