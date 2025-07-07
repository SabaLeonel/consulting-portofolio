import Footer from "@/components/footer";
import Header from "@/components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Calendar, CheckCircle, Clock, FileText, GraduationCap, Phone, Shield, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
 <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Master HEC Lausanne • Enseignant en Droit & Économie
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Votre Expert en
              <span className="text-blue-600 block">Conseil Financier</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Accompagnement personnalisé pour optimiser votre budget, vos investissements et sécuriser votre avenir
              financier. Une expertise académique au service des particuliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Réserver une Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-gray-300 bg-transparent">
                <Phone className="h-5 w-5 mr-2" />
                Appel Découverte Gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions sur-mesure pour optimiser votre situation financière
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Gestion de Budget</CardTitle>
                <CardDescription>
                  Analyse complète de vos finances personnelles et optimisation de votre budget familial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Audit financier complet
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Plan d'épargne personnalisé
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Outils de suivi budgétaire
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Conseil en Investissement</CardTitle>
                <CardDescription>
                  Stratégies d'investissement adaptées à votre profil et vos objectifs financiers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analyse de profil investisseur
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Diversification de portefeuille
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Suivi performance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Planification Retraite</CardTitle>
                <CardDescription>Préparation et optimisation de votre retraite pour un avenir serein</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Simulation retraite
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimisation fiscale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Plans d'épargne retraite
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Conseil Juridique</CardTitle>
                <CardDescription>Accompagnement juridique pour vos décisions financières importantes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contrats financiers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Succession et donation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Protection juridique
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Formation Financière</CardTitle>
                <CardDescription>Ateliers et formations pour développer votre culture financière</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ateliers budget familial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Initiation aux investissements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Éducation financière
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Suivi Personnalisé</CardTitle>
                <CardDescription>Accompagnement continu et ajustement de votre stratégie financière</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rendez-vous réguliers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapports mensuels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Support téléphonique
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos</h2>
              <p className="text-xl text-gray-600">Une expertise académique au service de votre réussite financière</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon Parcours</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Master HEC Lausanne</h4>
                        <p className="text-gray-600">Spécialisation en Finance et Économie</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Enseignant Universitaire</h4>
                        <p className="text-gray-600">Droit et Économie - 10 ans d'expérience</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Consultant Financier</h4>
                        <p className="text-gray-600">Accompagnement de plus de 200 familles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ma Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fort de mon expérience académique et de ma passion pour l'enseignement, je mets mon expertise au
                  service des particuliers pour les aider à prendre les meilleures décisions financières.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Mon approche pédagogique vous permet de comprendre les enjeux financiers et de devenir autonome dans
                  la gestion de votre patrimoine.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-sm text-gray-600">Clients accompagnés</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">10</div>
                    <div className="text-sm text-gray-600">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
              <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur mes services</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Comment se déroule la première consultation ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  La première consultation dure environ 1h30. Nous faisons le point sur votre situation financière
                  actuelle, vos objectifs et vos préoccupations. Je vous présente ensuite mes recommandations
                  personnalisées et nous établissons ensemble un plan d'action.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">Quels sont vos tarifs ?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Mes tarifs varient selon le type de service : consultation ponctuelle (150€), accompagnement mensuel
                  (300€/mois), ou forfait annuel (2500€). La première consultation découverte de 30 minutes est gratuite
                  et sans engagement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Proposez-vous des consultations à distance ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Oui, je propose des consultations en visioconférence pour s'adapter à vos contraintes. Les rendez-vous
                  en présentiel restent possibles dans mon bureau ou à votre domicile selon vos préférences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Quel est votre domaine d'expertise principal ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Je me spécialise dans le conseil financier pour particuliers : gestion de budget, optimisation
                  fiscale, préparation retraite et stratégies d'investissement. Mon background juridique me permet aussi
                  de vous conseiller sur les aspects légaux de vos décisions financières.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Travaillez-vous avec tous types de profils ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  J'accompagne tous les profils : jeunes actifs, familles, seniors, entrepreneurs. Que vous débutiez
                  dans la vie active ou prépariez votre retraite, j'adapte mes conseils à votre situation et vos
                  objectifs spécifiques.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Garantissez-vous la confidentialité ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Absolument. Je suis tenu au secret professionnel et toutes nos échanges restent strictement
                  confidentiels. Vos données financières sont protégées et ne sont jamais partagées avec des tiers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à Optimiser Vos Finances ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Réservez votre consultation gratuite de 30 minutes et découvrez comment améliorer votre situation financière
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Calendar className="h-5 w-5 mr-2" />
              Réserver ma Consultation Gratuite
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              Me Contacter Directement
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
