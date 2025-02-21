import { EventCarousel } from "@/components/events/events"

export default function EventsPage() {
  return (
    <main className="flex-1 container mx-auto py-4 md:py-8 px-4 md:px-8">
      <div className="text-center max-w-4xl mx-auto mb-6 md:mb-6 mt-16 md:mt-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">DISCOVER OUR EXCITING EVENTS</h1>
        <p className="text-base md:text-lg text-gray-600">
          Join us in our journey of learning and innovation.
        </p>
      </div>
      <EventCarousel />
    </main>
  )
}
