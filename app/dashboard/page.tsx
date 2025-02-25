import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, BookOpen, FileText, LinkIcon, Calendar } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>
          <PlusCircle className="mr-2 h-5 w-5" />
          Add Material
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Materials" value="124" icon={BookOpen} />
        <StatCard title="Text Notes" value="45" icon={FileText} />
        <StatCard title="PDF Documents" value="32" icon={FileText} />
        <StatCard title="Web Links" value="47" icon={LinkIcon} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Materials</CardTitle>
            <CardDescription>Your most recently added study materials</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentMaterials.map((material, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <material.icon className="h-5 w-5 text-muted-foreground" />
                  <span>{material.title}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Your nearest deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upcomingDeadlines.map((deadline, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{deadline.title}</span>
                  <span className="text-sm text-muted-foreground">{deadline.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Progress</CardTitle>
            <CardDescription>Your weekly study goal progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studyProgress.map((subject, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{subject.name}</span>
                    <span>{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Study Calendar</CardTitle>
          <CardDescription>Your upcoming study sessions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-muted rounded-md">
            <Calendar className="h-16 w-16 text-muted-foreground" />
            <span className="ml-4 text-lg text-muted-foreground">Calendar Integration Coming Soon</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

const recentMaterials = [
  { title: "Biology Chapter 5 Notes", icon: FileText },
  { title: "Physics Formulas PDF", icon: FileText },
  { title: "History Timeline Link", icon: LinkIcon },
  { title: "Math Problem Set", icon: FileText },
]

const upcomingDeadlines = [
  { title: "Chemistry Lab Report", date: "May 15" },
  { title: "Literature Essay", date: "May 18" },
  { title: "Statistics Project", date: "May 22" },
  { title: "Programming Assignment", date: "May 25" },
]

const studyProgress = [
  { name: "Biology", progress: 75 },
  { name: "Mathematics", progress: 60 },
  { name: "History", progress: 40 },
  { name: "Physics", progress: 80 },
]

