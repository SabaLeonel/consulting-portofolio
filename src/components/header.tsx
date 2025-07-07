'use client'
import { getCalApi } from '@calcom/embed-react'
import { Calendar, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { Button } from './ui/button'

export default function Header() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "theme": "light", "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">John Doe</h1>
              <p className="text-sm text-gray-600">Conseil Financier & Économique</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#apropos" className="text-gray-600 hover:text-blue-600 transition-colors">
              À propos
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700"
              data-cal-namespace="30min"
              data-cal-link="sabaleonel/30min"
              data-cal-config='{"layout":"month_view"}'>
              <Calendar className="h-4 w-4 mr-2" />
              Prendre RDV
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
