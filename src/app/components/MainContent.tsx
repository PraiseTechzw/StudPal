"use client"

import { useState } from "react"
import { FileText, FileImage, Link, Tag, Clock } from "lucide-react"

type Material = {
  id: number
  type: "text" | "pdf" | "link"
  title: string
  tags: string[]
  priority: "High" | "Medium" | "Low"
  date: string
}

const materials: Material[] = [
  {
    id: 1,
    type: "text",
    title: "Biology Notes Chapter 1",
    tags: ["Biology", "Semester 4"],
    priority: "High",
    date: "2023-05-15",
  },
  {
    id: 2,
    type: "pdf",
    title: "Physics Textbook",
    tags: ["Physics", "Reference"],
    priority: "Medium",
    date: "2023-05-10",
  },
  {
    id: 3,
    type: "link",
    title: "Math Tutorial Video",
    tags: ["Math", "Tutorial"],
    priority: "Low",
    date: "2023-05-05",
  },
]

export default function MainContent() {
  const [filter, setFilter] = useState("all")

  const filteredMaterials = materials.filter((material) => filter === "all" || material.type === filter)

  return (
    <main className="flex-1 p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-navy-blue mb-2">Your Materials</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${filter === "all" ? "bg-teal text-white" : "bg-gray-200 text-navy-blue"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("text")}
            className={`px-4 py-2 rounded ${filter === "text" ? "bg-teal text-white" : "bg-gray-200 text-navy-blue"}`}
          >
            Text Notes
          </button>
          <button
            onClick={() => setFilter("pdf")}
            className={`px-4 py-2 rounded ${filter === "pdf" ? "bg-teal text-white" : "bg-gray-200 text-navy-blue"}`}
          >
            PDF Documents
          </button>
          <button
            onClick={() => setFilter("link")}
            className={`px-4 py-2 rounded ${filter === "link" ? "bg-teal text-white" : "bg-gray-200 text-navy-blue"}`}
          >
            Web Links
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMaterials.map((material) => (
          <div key={material.id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center mb-2">
              {material.type === "text" && <FileText className="text-navy-blue mr-2" />}
              {material.type === "pdf" && <FileImage className="text-navy-blue mr-2" />}
              {material.type === "link" && <Link className="text-navy-blue mr-2" />}
              <h3 className="text-lg font-semibold text-navy-blue">{material.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {material.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 text-navy-blue text-sm px-2 py-1 rounded">
                  <Tag className="inline-block w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span
                className={`px-2 py-1 rounded ${
                  material.priority === "High"
                    ? "bg-coral text-white"
                    : material.priority === "Medium"
                      ? "bg-yellow-400 text-white"
                      : "bg-green-400 text-white"
                }`}
              >
                {material.priority}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {material.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

