// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client';
import React, { useState, useEffect } from 'react';
import { Button, Input, Form, Divider, Card, Typography, List, Modal } from 'antd';
import { 
  ArrowRightOutlined, 
  CheckCircleOutlined, 
  LockOutlined, 
  MailOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const { Title, Text, Paragraph } = Typography;

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentDate] = useState(new Date());

  useEffect(() => {
    const chartDom = document.getElementById('satisfaction-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            max: 100
          }
        ],
        series: [
          {
            name: 'Satisfaction',
            type: 'bar',
            barWidth: '60%',
            data: [85, 88, 90, 93, 96, 98],
            itemStyle: {
              color: '#4F46E5'
            }
          }
        ]
      };

      myChart.setOption(option);
      
      const handleResize = () => {
        myChart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-indigo-600 flex items-center">
              <i className="fas fa-file-invoice text-indigo-600 mr-2"></i>
              <span>FacturePDF</span>
            </div>
            <nav className="hidden md:flex ml-10">
              <a href="#accueil" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium whitespace-nowrap">Accueil</a>
              <a href="#fonctionnalites" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium whitespace-nowrap">Fonctionnalités</a>
              <a href="#prix" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium whitespace-nowrap">Prix</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium whitespace-nowrap">Contact</a>
            </nav>
          </div>
          <div className="flex items-center">
            <Button 
              type="primary" 
              className="!rounded-button bg-indigo-600 hover:bg-indigo-700 border-none whitespace-nowrap cursor-pointer"
              onClick={showModal}
            >
              Connexion
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 relative overflow-hidden" style={{ minHeight: '700px' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent z-0"></div>
          <img 
            src="https://readdy.ai/api/search-image?query=A%20professional%20and%20elegant%20workspace%20with%20a%20modern%20laptop%20displaying%20a%20PDF%20invoice%20management%20application%2C%20soft%20natural%20lighting%2C%20minimalist%20desk%20setup%20with%20plants%2C%20clean%20and%20organized%20environment%2C%20high-quality%20rendering%20with%20soft%20shadows%20and%20highlights%2C%20business%20professional%20atmosphere&width=800&height=600&seq=1&orientation=landscape" 
            alt="Gestion de factures" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-4 relative z-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="pt-10 pb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simplifiez la gestion de vos factures PDF
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Une solution intuitive pour organiser, analyser et optimiser toutes vos factures au format PDF en un seul endroit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="primary" 
                  size="large" 
                  className="!rounded-button bg-indigo-600 hover:bg-indigo-700 border-none text-lg h-12 px-8 whitespace-nowrap cursor-pointer"
                  onClick={showModal}
                >
                  Essayer gratuitement <ArrowRightOutlined className="ml-2" />
                </Button>
                <Button 
                  size="large" 
                  className="!rounded-button border-gray-300 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 text-lg h-12 px-8 whitespace-nowrap cursor-pointer"
                >
                  Voir la démo
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
                      src={`https://readdy.ai/api/search-image?query=Professional%20business%20person%20headshot%20portrait%2C%20neutral%20background%2C%20high%20quality%20professional%20photo%2C%20business%20attire%2C%20confident%20expression&width=100&height=100&seq=${i}&orientation=squarish`}
                      alt={`Utilisateur ${i}`} 
                    />
                  ))}
                </div>
                <span className="ml-4 text-sm text-gray-600">
                  Rejoint par <span className="font-semibold">2,000+</span> professionnels
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fonctionnalités principales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre application offre tout ce dont vous avez besoin pour gérer efficacement vos factures PDF.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-search",
                title: "Recherche intelligente",
                description: "Retrouvez n'importe quelle facture en quelques secondes grâce à notre moteur de recherche avancé."
              },
              {
                icon: "fas fa-chart-line",
                title: "Analyse des dépenses",
                description: "Visualisez et analysez vos dépenses avec des graphiques clairs et des rapports détaillés."
              },
              {
                icon: "fas fa-cloud-upload-alt",
                title: "Stockage sécurisé",
                description: "Vos factures sont stockées en toute sécurité dans le cloud, accessibles à tout moment."
              },
              {
                icon: "fas fa-tags",
                title: "Catégorisation automatique",
                description: "Notre système classe automatiquement vos factures par catégorie pour une meilleure organisation."
              },
              {
                icon: "fas fa-bell",
                title: "Alertes d'échéance",
                description: "Recevez des notifications pour ne jamais manquer une date limite de paiement."
              },
              {
                icon: "fas fa-file-export",
                title: "Export multi-formats",
                description: "Exportez vos données dans différents formats pour une intégration facile avec votre comptabilité."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <div className="text-indigo-600 mb-4 text-3xl">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Découvrez notre interface</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience utilisateur intuitive conçue pour simplifier la gestion de vos documents.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20dashboard%20interface%20for%20PDF%20invoice%20management%20application%2C%20showing%20clean%20UI%20with%20data%20visualization%20charts%2C%20invoice%20list%2C%20search%20functionality%2C%20and%20document%20preview%20panel%2C%20modern%20design%20with%20blue%20accent%20color%2C%20high-quality%20UI%20mockup%20on%20laptop%20screen&width=1200&height=800&seq=2&orientation=landscape" 
              alt="Interface de l'application" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dashboard intuitif",
                description: "Visualisez toutes vos informations importantes en un coup d'œil."
              },
              {
                title: "Gestion simplifiée",
                description: "Interface épurée et facile à prendre en main, même pour les débutants."
              },
              {
                title: "Personnalisation complète",
                description: "Adaptez l'interface à vos besoins spécifiques et à votre flux de travail."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleOutlined className="text-green-500 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir notre solution ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des avantages concrets pour votre entreprise et votre gestion quotidienne.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gagnez du temps précieux</h3>
              <ul className="space-y-4">
                {[
                  "Réduction de 75% du temps consacré à la recherche de documents",
                  "Automatisation des tâches répétitives de classement",
                  "Extraction automatique des données clés des factures",
                  "Rapports générés en un clic au lieu de plusieurs heures de travail"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-check-circle text-green-500"></i>
                    </div>
                    <p className="ml-3 text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Business%20professional%20saving%20time%2C%20organized%20workspace%20with%20digital%20tablet%20showing%20invoice%20management%20app%2C%20clock%20showing%20time%20saved%2C%20productivity%20concept%2C%20business%20efficiency%20visualization%2C%20clean%20modern%20office%20setting&width=600&height=400&seq=3&orientation=landscape" 
                alt="Gain de temps" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://readdy.ai/api/search-image?query=Financial%20data%20visualization%20with%20charts%20and%20graphs%20showing%20cost%20reduction%2C%20business%20analytics%20dashboard%20on%20computer%20screen%2C%20professional%20office%20environment%2C%20data-driven%20decision%20making%20concept%2C%20clean%20modern%20design&width=600&height=400&seq=4&orientation=landscape" 
                alt="Réduction des coûts" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Réduisez vos coûts</h3>
              <ul className="space-y-4">
                {[
                  "Économisez jusqu'à 30% sur les coûts administratifs",
                  "Éliminez les erreurs coûteuses grâce à l'automatisation",
                  "Identifiez facilement les opportunités d'économies",
                  "Optimisez votre trésorerie grâce à une meilleure visibilité"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-check-circle text-green-500"></i>
                    </div>
                    <p className="ml-3 text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Améliorez votre conformité</h3>
              <ul className="space-y-4">
                {[
                  "Stockage sécurisé conforme aux réglementations en vigueur",
                  "Piste d'audit complète pour toutes les opérations",
                  "Préparation simplifiée pour les contrôles fiscaux",
                  "Réduction des risques d'erreurs et de non-conformité"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-check-circle text-green-500"></i>
                    </div>
                    <p className="ml-3 text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Secure%20document%20compliance%20concept%2C%20digital%20security%20for%20invoice%20management%2C%20professional%20looking%20at%20secure%20data%20on%20computer%20screen%2C%20padlock%20icon%2C%20regulatory%20compliance%20visualization%2C%20modern%20office%20environment&width=600&height=400&seq=5&orientation=landscape" 
                alt="Conformité réglementaire" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

    {/* Testimonial Section */}
    <div className="py-20 px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Title
                level={2}
                className="text-3xl font-bold text-blue-800 mb-4"
              >
                Ce que nos clients disent
              </Title>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-yellow-500 mb-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <Paragraph className="text-gray-700 text-lg italic mb-6">
                  "Cette application a complètement transformé notre processus
                  de gestion des factures. Nous économisons des heures chaque
                  semaine."
                </Paragraph>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <Text className="text-blue-800 font-bold">ML</Text>
                  </div>
                  <div>
                    <Text className="font-bold block">Marie Laurent</Text>
                    <Text className="text-gray-500">
                      Directrice Financière, Techno Plus
                    </Text>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-yellow-500 mb-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <Paragraph className="text-gray-700 text-lg italic mb-6">
                  "Interface intuitive et fonctionnalités puissantes. Je
                  recommande vivement à toutes les PME qui veulent simplifier
                  leur comptabilité."
                </Paragraph>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <Text className="text-blue-800 font-bold">PD</Text>
                  </div>
                  <div>
                    <Text className="font-bold block">Philippe Dubois</Text>
                    <Text className="text-gray-500">
                      Entrepreneur, Studio Créatif
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Pricing Section */}
      <section id="prix" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos formules d'abonnement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des offres adaptées à tous les besoins, de l'indépendant à la grande entreprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essentiel",
                price: "19",
                features: [
                  "Jusqu'à 500 factures",
                  "Recherche basique",
                  "Stockage sécurisé",
                  "Export PDF et CSV",
                  "Support par email"
                ],
                cta: "Commencer",
                popular: false
              },
              {
                name: "Professionnel",
                price: "49",
                features: [
                  "Jusqu'à 2000 factures",
                  "Recherche avancée",
                  "Analyse des dépenses",
                  "Intégration comptable",
                  "Support prioritaire",
                  "Utilisateurs multiples"
                ],
                cta: "Essayer gratuitement",
                popular: true
              },
              {
                name: "Entreprise",
                price: "99",
                features: [
                  "Factures illimitées",
                  "IA pour l'extraction de données",
                  "Tableaux de bord personnalisés",
                  "API complète",
                  "Support dédié 24/7",
                  "Conformité renforcée"
                ],
                cta: "Contacter les ventes",
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-2 border-indigo-600 shadow-lg transform scale-105 md:scale-110 z-10' 
                    : 'border border-gray-200 shadow'
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2 font-medium">
                    Recommandé
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                    <span className="text-gray-600 ml-2">/mois</span>
                  </div>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-check text-green-500"></i>
                        </div>
                        <p className="ml-3 text-gray-600">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    type={plan.popular ? "primary" : "default"} 
                    block 
                    size="large" 
                    className={`!rounded-button whitespace-nowrap cursor-pointer ${
                      plan.popular 
                        ? 'bg-indigo-600 hover:bg-indigo-700 border-none' 
                        : 'border-gray-300 hover:border-indigo-600 hover:text-indigo-600'
                    }`}
                    onClick={showModal}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Besoin d'une solution sur mesure ? <a href="#contact" className="text-indigo-600 font-medium hover:underline">Contactez-nous</a> pour discuter de vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur notre solution de gestion de factures PDF.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Comment fonctionne l'importation des factures ?",
                answer: "Vous pouvez importer vos factures PDF par simple glisser-déposer, par email dédié, ou via notre application mobile en prenant une photo. Notre système extrait automatiquement les informations importantes."
              },
              {
                question: "Mes données sont-elles sécurisées ?",
                answer: "Absolument. Nous utilisons un chiffrement de niveau bancaire pour toutes vos données. Nos serveurs sont conformes aux normes ISO 27001 et RGPD. Vous gardez le contrôle total de vos informations."
              },
              {
                question: "Puis-je partager l'accès avec mon comptable ?",
                answer: "Oui, vous pouvez inviter votre comptable ou d'autres collaborateurs avec différents niveaux d'accès. Vous contrôlez précisément ce que chaque utilisateur peut voir ou modifier."
              },
              {
                question: "Est-ce que je peux exporter mes données ?",
                answer: "Vous pouvez exporter vos données à tout moment dans plusieurs formats (Excel, CSV, PDF). Nous proposons également des intégrations directes avec les principaux logiciels de comptabilité."
              },
              {
                question: "Combien de temps faut-il pour mettre en place la solution ?",
                answer: "La mise en place est immédiate. Vous pouvez commencer à utiliser l'application dès la création de votre compte. L'importation de vos factures existantes peut être réalisée en quelques heures selon le volume."
              },
              {
                question: "Proposez-vous une période d'essai ?",
                answer: "Oui, nous offrons une période d'essai gratuite de 14 jours pour toutes nos formules, sans engagement et sans carte bancaire. Vous pourrez tester toutes les fonctionnalités avant de vous décider."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
                {index < 5 && <Divider className="my-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à simplifier la gestion de vos factures ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Rejoignez des milliers d'entreprises qui ont déjà transformé leur gestion documentaire.
          </p>
          <Button 
            size="large" 
            className="!rounded-button bg-white text-indigo-600 hover:bg-indigo-50 border-none text-lg h-12 px-8 whitespace-nowrap cursor-pointer"
            onClick={showModal}
          >
            Commencer votre essai gratuit
          </Button>
          <p className="text-indigo-200 mt-4">
            Aucune carte bancaire requise. Annulez à tout moment.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
              
              <Form layout="vertical" className="mb-8">
                <Form.Item label="Nom complet" required>
                  <Input 
                    prefix={<UserOutlined className="text-gray-400" />} 
                    placeholder="Votre nom" 
                    className="h-12 text-base"
                  />
                </Form.Item>
                <Form.Item label="Email" required>
                  <Input 
                    prefix={<MailOutlined className="text-gray-400" />} 
                    placeholder="Votre email" 
                    className="h-12 text-base"
                  />
                </Form.Item>
                <Form.Item label="Message" required>
                  <Input.TextArea 
                    placeholder="Comment pouvons-nous vous aider ?" 
                    rows={4} 
                    className="text-base"
                  />
                </Form.Item>
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large" 
                    className="!rounded-button bg-indigo-600 hover:bg-indigo-700 border-none whitespace-nowrap cursor-pointer"
                  >
                    Envoyer le message
                  </Button>
                </Form.Item>
              </Form>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@facturepdf.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Adresse</h3>
                    <p className="text-gray-600">123 Avenue des Champs-Élysées, 75008 Paris</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Customer%20support%20team%20in%20modern%20office%20environment%2C%20friendly%20professionals%20ready%20to%20help%2C%20clean%20workspace%20with%20computers%2C%20headsets%20for%20customer%20service%2C%20bright%20and%20welcoming%20atmosphere%2C%20professional%20business%20setting&width=600&height=800&seq=11&orientation=portrait" 
                alt="Notre équipe support" 
                className="rounded-lg shadow-lg max-h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white pt-16 pb-8"> */}
         {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 FacturePDF. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-700 text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 text-sm">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <Modal
        title="Connexion"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={400}
      >
        <Form layout="vertical" className="mt-4">
          <Form.Item label="Email" required>
            <Input 
              prefix={<MailOutlined className="text-gray-400" />} 
              placeholder="Votre email" 
              className="h-12 text-base"
            />
          </Form.Item>
          <Form.Item label="Mot de passe" required>
            <Input.Password 
              prefix={<LockOutlined className="text-gray-400" />} 
              placeholder="Votre mot de passe" 
              className="h-12 text-base"
            />
          </Form.Item>
          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <input type="checkbox" className="mr-2" id="remember" />
              <label htmlFor="remember" className="text-gray-600">Se souvenir de moi</label>
            </Form.Item>
            <a href="#" className="text-indigo-600 hover:underline">Mot de passe oublié ?</a>
          </div>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              size="large" 
              className="!rounded-button bg-indigo-600 hover:bg-indigo-700 border-none whitespace-nowrap cursor-pointer"
            >
              Se connecter
            </Button>
          </Form.Item>
        </Form>
        <Divider plain>ou</Divider>
        <div className="space-y-3">
          <Button 
            block 
            size="large" 
            icon={<i className="fab fa-google mr-2"></i>} 
            className="!rounded-button whitespace-nowrap cursor-pointer"
          >
            Continuer avec Google
          </Button>
          <Button 
            block 
            size="large" 
            icon={<i className="fab fa-microsoft mr-2"></i>} 
            className="!rounded-button whitespace-nowrap cursor-pointer"
          >
            Continuer avec Microsoft
          </Button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Pas encore de compte ? <a href="#" onClick={handleCancel} className="text-indigo-600 hover:underline">S'inscrire</a>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
