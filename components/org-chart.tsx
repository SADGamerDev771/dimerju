"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TeamMember from "@/components/team-member"

interface TeamMemberType {
  name: string
  role: string
  bio: string
  image: string
  reportsTo?: string
}

interface OrgChartProps {
  teamMembers: TeamMemberType[]
}

export default function OrgChart({ teamMembers }: OrgChartProps) {
  // Change the initial state of expandedDepartments to an empty array so all departments are collapsed by default
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([])

  // Find the CEO
  const ceo = teamMembers.find((member) => member.role === "CEO")

  // Group executives by department
  const departments = {
    Operations: ["COO", "CHRO"],
    Finance: ["CFO", "CRO"],
    Technology: ["CTO", "CISO", "CDAO", "CINO"],
    Marketing: ["CMO", "CXO"],
    Product: ["CPO"],
    Legal: ["CCLO"],
  }

  const toggleDepartment = (department: string) => {
    setExpandedDepartments((prev) =>
      prev.includes(department) ? prev.filter((d) => d !== department) : [...prev, department],
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* CEO at the top */}
      {ceo && (
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <TeamMember
              name={`${ceo.name} (Founder)`}
              role={ceo.role}
              bio={ceo.bio}
              image={ceo.image}
              isFounder={true}
            />
          </motion.div>
        </div>
      )}

      {/* Connection line from CEO to departments */}
      <div className="relative h-16 mb-4">
        <div className="absolute left-1/2 w-0.5 h-full bg-purple-500 transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-3/4 h-0.5 bg-purple-500 transform -translate-x-1/2"></div>
      </div>

      {/* Departments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {Object.entries(departments).map(([department, roles], index) => {
          const departmentMembers = teamMembers.filter((member) => roles.includes(member.role))
          const isExpanded = expandedDepartments.includes(department)

          return (
            <div key={department} className="flex flex-col items-center">
              {/* Department header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="w-full"
              >
                <button
                  onClick={() => toggleDepartment(department)}
                  className="w-full bg-gradient-to-r from-purple-900 to-blue-900 p-4 rounded-lg mb-4 text-center cursor-pointer hover:from-purple-800 hover:to-blue-800 transition-all"
                >
                  <h3 className="text-xl font-bold">{department}</h3>
                  <div className="mt-1 text-sm text-purple-300">
                    {isExpanded ? "Click to collapse" : "Click to expand"}
                  </div>
                </button>

                {/* Connection line from department to members */}
                {isExpanded && departmentMembers.length > 0 && (
                  <div className="relative h-8 mb-4">
                    <div className="absolute left-1/2 w-0.5 h-full bg-blue-500 transform -translate-x-1/2"></div>
                    {departmentMembers.length > 1 && (
                      <div className="absolute bottom-0 left-1/2 w-3/4 h-0.5 bg-blue-500 transform -translate-x-1/2"></div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Department members */}
              {isExpanded && (
                <div className="grid grid-cols-1 gap-6 w-full">
                  {departmentMembers.map((member, memberIndex) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * memberIndex }}
                    >
                      <TeamMember name={member.name} role={member.role} bio={member.bio} image={member.image} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

