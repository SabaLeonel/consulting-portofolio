import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-400">Conseil Financier & Économique</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Expert en conseil financier avec une approche pédagogique pour vous accompagner vers l'indépendance
                financière.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+41 76 777 77 77</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">contact@johndoe.ch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Berne & Région Jura-Bernoise</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Horaires</h4>
              <div className="space-y-2 text-gray-300">
                <div>Lundi - Vendredi : 9h - 18h</div>
                <div>Samedi : 9h - 13h</div>
                <div>Dimanche : Fermé</div>
                <div className="mt-4 text-sm text-gray-400">Consultations sur rendez-vous uniquement</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
  )
}
