import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle className="text-3xl">Portfolio</CardTitle>
          <CardDescription>Built with Astro, React & shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </CardContent>
      </Card>
    </div>
  )
}
