'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { BackgroundLines } from './ui/backgrouund-lines';

export function Feature() {
  return (
    <BackgroundLines>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
      >

        <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-black">
                500+ Students
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text- sm:text-4xl lg:text-5xl">
              Facillities By Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-grey-600">
              All courses are government affiliated and designed by CSC Academy under ministry of MHRD.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="h-9 w-9 text-blue-700">
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold  text-blue-900">Affordable Courses</h3>
              <p className="mt-4 text-sm text-blue-600">
                Top courses at affordable price. Join us today!
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="h-9 w-9 text-green-700">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-green-900">
                Technical Support
              </h3>
              <p className="mt-4 text-sm text-green-600">
                Get Technical assNameistance from us. We provide you with best support.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="h-9 w-9 text-red-700">
                  <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-red-900">
                Smart Classroom
              </h3>
              <p className="mt-4 text-sm text-red-600">
                We provide smart classrooms with  all modern facilities for learning.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="h-9 w-9 text-purple-700">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-purple-900">Fill your career with a technical star</h3>
              <p className="mt-4 text-sm text-purple-600">
                Technology is a necessity for future , so we are providing the facility to learn technology.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </BackgroundLines>
  )
}
