import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, PlusCircle } from "lucide-react"

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <Button>
          <PlusCircle className="mr-2 h-5 w-5" />
          Add Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Study Calendar</CardTitle>
          <CardDescription>Manage your study schedule and deadlines</CardDescription>
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

