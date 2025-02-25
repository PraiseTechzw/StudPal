import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, PlusCircle } from "lucide-react"

export default function Groups() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Study Groups</h1>
        <Button>
          <PlusCircle className="mr-2 h-5 w-5" />
          Create Group
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Study Groups</CardTitle>
          <CardDescription>Manage and collaborate with your study groups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-muted rounded-md">
            <Users className="h-16 w-16 text-muted-foreground" />
            <span className="ml-4 text-lg text-muted-foreground">No study groups yet. Create one to get started!</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

