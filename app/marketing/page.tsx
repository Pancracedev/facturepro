import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/ui/buttonn"
import { CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="FacturePro Logo" width={40} height={40} className="mr-2" />
            <span className="text-xl font-bold text-blue-600">FacturePro</span>
          </div>
          <nav className="hidden space-x-8 md:flex">
            <Link href="#fonctionnalites" className="text-gray-600 hover:text-blue-600">
              Fonctionnalités
            </Link>
            <Link href="#avantages" className="text-gray-600 hover:text-blue-600">
              Avantages
            </Link>
            <Link href="#tarifs" className="text-gray-600 hover:text-blue-600">
              Tarifs
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/auth/signin">
              <Button variant="outline">Connexion</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Essai gratuit</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="max-w-xl">
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                  Gérez vos factures en toute simplicité
                </h1>
                <p className="mb-8 text-xl text-gray-600">
                  FacturePro vous permet de créer, envoyer et suivre vos factures professionnelles en quelques clics.
                  Gagnez du temps et concentrez-vous sur votre activité.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link href="/auth/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Commencer gratuitement
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Voir la démo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full max-w-md">
                <Image
                  src="/dashboard-preview.png"
                  alt="Aperçu du tableau de bord"
                  fill
                  className="rounded-lg object-contain shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section id="fonctionnalites" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Fonctionnalités principales</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Découvrez comment FacturePro peut transformer votre gestion de facturation et vous faire gagner du temps
                précieux.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Fonctionnalité 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Création de factures</h3>
                <p className="text-gray-600">
                  Créez des factures professionnelles en quelques secondes avec nos modèles personnalisables.
                </p>
              </div>

              {/* Fonctionnalité 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Suivi des paiements</h3>
                <p className="text-gray-600">
                  Suivez facilement le statut de vos factures et recevez des notifications lorsqu'elles sont payées.
                </p>
              </div>

              {/* Fonctionnalité 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Rapports détaillés</h3>
                <p className="text-gray-600">
                  Obtenez des insights précieux sur votre activité grâce à nos rapports et tableaux de bord.
                </p>
              </div>

              {/* Fonctionnalité 4 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Gestion des clients</h3>
                <p className="text-gray-600">
                  Gérez votre base de clients et accédez rapidement à leur historique de facturation.
                </p>
              </div>

              {/* Fonctionnalité 5 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Gestion des paiements</h3>
                <p className="text-gray-600">
                  Acceptez les paiements en ligne et automatisez les rappels pour les factures impayées.
                </p>
              </div>

              {/* Fonctionnalité 6 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Rappels automatiques</h3>
                <p className="text-gray-600">
                  Configurez des rappels automatiques pour les factures en retard et les échéances à venir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section id="avantages" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Pourquoi choisir FacturePro ?</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Notre solution de facturation offre de nombreux avantages pour les entrepreneurs et les PME.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <ul className="space-y-6">
                  {[
                    "Gain de temps considérable dans la gestion de vos factures",
                    "Interface intuitive et facile à prendre en main",
                    "Sécurité des données garantie avec un chiffrement de bout en bout",
                    "Accès depuis n'importe quel appareil, n'importe où",
                    "Support client réactif et disponible",
                    "Mises à jour régulières avec de nouvelles fonctionnalités",
                  ].map((avantage, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                      <span className="text-gray-700">{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg shadow-xl">
                <Image src="/invoice-preview.png" alt="Aperçu d'une facture" fill className="rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Ce que nos clients disent</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Découvrez comment FacturePro a transformé la gestion de facturation de nos clients.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Témoignage 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image src="/testimonial-1.jpg" alt="Sophie Martin" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sophie Martin</h4>
                    <p className="text-sm text-gray-600">Graphiste indépendante</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "FacturePro a complètement transformé ma façon de gérer mes factures. Je gagne un temps précieux et
                  mes clients sont impressionnés par le professionnalisme de mes factures."
                </p>
              </div>

              {/* Témoignage 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image src="/testimonial-2.jpg" alt="Thomas Dubois" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Thomas Dubois</h4>
                    <p className="text-sm text-gray-600">Consultant IT</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Les rapports détaillés me permettent de suivre précisément mes revenus et de prévoir ma trésorerie.
                  Un outil indispensable pour mon activité !"
                </p>
              </div>

              {/* Témoignage 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image src="/testimonial-3.jpg" alt="Marie Leroy" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Marie Leroy</h4>
                    <p className="text-sm text-gray-600">Agence de communication</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Notre équipe utilise FacturePro quotidiennement. La gestion des clients et le suivi des paiements
                  sont devenus un jeu d'enfant. Je le recommande vivement !"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section id="tarifs" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Tarifs simples et transparents</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Choisissez le forfait qui correspond le mieux à vos besoins.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Forfait Starter */}
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Starter</h3>
                <p className="mb-6 text-gray-600">Parfait pour les freelances débutants</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">19€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Jusqu'à 20 factures par mois</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Gestion des clients</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Exportation PDF</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Support par email</span>
                  </li>
                </ul>
                <Link href="/auth/signup?plan=starter">
                  <Button className="w-full">Commencer</Button>
                </Link>
              </div>

              {/* Forfait Pro */}
              <div className="relative rounded-lg border-2 border-blue-600 bg-white p-8 shadow-md">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Populaire
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Pro</h3>
                <p className="mb-6 text-gray-600">Idéal pour les freelances et petites entreprises</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">39€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Factures illimitées</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Gestion des clients avancée</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Rappels automatiques</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Rapports détaillés</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Support prioritaire</span>
                  </li>
                </ul>
                <Link href="/auth/signup?plan=pro">
                  <Button className="w-full">Commencer</Button>
                </Link>
              </div>

              {/* Forfait Business */}
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Business</h3>
                <p className="mb-6 text-gray-600">Pour les entreprises en croissance</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">79€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Tout ce qui est inclus dans Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Utilisateurs multiples</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Personnalisation avancée</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">API pour intégrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Support dédié</span>
                  </li>
                </ul>
                <Link href="/auth/signup?plan=business">
                  <Button className="w-full">Commencer</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">Prêt à simplifier votre facturation ?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Rejoignez des milliers d'entrepreneurs qui font confiance à FacturePro pour leur facturation.
            </p>
            <Link href="/auth/signup">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Commencer gratuitement
              </Button>
            </Link>
            <p className="mt-4 text-sm text-blue-200">Aucune carte de crédit requise. Essai gratuit de 14 jours.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center">
                <Image src="/logo.png" alt="FacturePro Logo" width={32} height={32} className="mr-2" />
                <span className="text-lg font-bold text-blue-600">FacturePro</span>
              </div>
              <p className="mt-4 text-gray-600">
                La solution de facturation simple et efficace pour les entrepreneurs et les PME.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">Produit</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#fonctionnalites" className="text-gray-600 hover:text-blue-600">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="#tarifs" className="text-gray-600 hover:text-blue-600">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">Ressources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">Légal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600">© 2023 FacturePro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
