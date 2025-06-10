import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import  {
  comissionamentoSe5500kvaMelhorado,
  comissionamentoSe69kvMelhorado,
  estudoDeCurtoCircuitoSe1500kvaMelhorado,
  hidraulicoEmBimMaristaSantoAntonioMelhorado,
  novaFabricaRandonTrielHtBannerMelhorado,
  ppciEmBimAgroIndustriaPrMelhorado,
  projetoAmpliacaoSlDoBrasilBannerMelhorado,
  projetoArCondionadosMelhorado,
  projetoEletricoHidraulicoNovaPlantaGlpBanner,
  projetoEletricoRennerOtavioRochaBanner,
  projetoFiltroDeMangaSouzaCruzBannerMelhorado,
  projetoNovaSubestacaoCiaZaffariBannerMelhorado,
  projetoSubestacaoYappAutomotiveBannerMelhorado,
  salaEletricaKlabinMelhorado,
} from "@/assets";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { Height } from "@mui/icons-material";
import { useState } from "react";

const projects = [
  {
    id: "ambev-se-69kv",
    title: "Comissionamento SE 69kV",
    description:
      "Estudo e Comissionamento SE’s Ambev. A RSI Engenharia realizou o comissionamento e substituição do relé de proteção da subestação de 69kV da empresa Ambev, localizada em Itapissuma – Pernambuco.",
    image: comissionamentoSe69kvMelhorado,
    delay: 0.1,
    date: "novembro 28, 2020",
  },
  {
    id: "zaffari-se-5500kva",
    title: "Comissionamento SE 5.500 kVA",
    description:
      "Comissionamento Subestação 13.8kV. A RSI Engenharia realizou o comissionamento da subestação de 13.8kV da empresa Zaffari Teresópolis, localizada no Rio Grande do Sul. Como resultado, apresentamos um excelente trabalho.",
    image: comissionamentoSe5500kvaMelhorado,
    delay: 0.2,
    date: "novembro 28, 2020",
  },
  {
    id: "curto-circuito-1500kva",
    title: "Estudos de Curto Circuito e Seletividade 1.500kVA",
    description:
      "Estudos de curto circuito e seletividade para subestação de 1.500kVA / 13.8kV. Desenvolvimento de ECS de subesta; Elaboração de Coordenadogramas; Ajustes de Relé de Proteção de Fase e Neutro;",
    image: estudoDeCurtoCircuitoSe1500kvaMelhorado,
    delay: 0.3,
    date: "novembro 28, 2020",
  },
  {
    id: "hidraulico-bim",
    title: "Projeto Hidráulico em BIM",
    description:
      "A RSI Engenharia conta com diversas soluções em projeto Hidráulico em BIM Projeto Drenagem BIM; Projeto Hidráulico BIM; Projeto Pluvial BIM; Memorial Descritivo; Listagem de Material; Projeto Elétrico das Bombas.",
    image: hidraulicoEmBimMaristaSantoAntonioMelhorado,
    delay: 0.4,
    date: "novembro 28, 2020",
  },
  {
    id: "ppci-bim",
    title: "Projeto de PPCI em BIM",
    description:
      "Local: Agro Indústria – PR Elaboração de Projetos de PPCI em BIM Projeto de SPK em BIM; Projeto de Hidrantes em BIM; Projeto de Alarme de Incêndio em BIM;",
    image: ppciEmBimAgroIndustriaPrMelhorado,
    delay: 0.5,
    date: "novembro 28, 2020",
  },
  {
    id: "sala-eletrica-bim-klabin",
    title: "Projeto Sala Elétrica em BIM-1000kVA/690V",
    description:
      "Local: Klabin – PR Projeto Sala Elétrica em BIM-1000kVA/690V Projeto Elétrico da sala em BIM; Estudo de curto circuito e seletividade; Estudo de ATPV; Dimensionamento de condutores; Diagrama unifilar",
    image: salaEletricaKlabinMelhorado,
    delay: 0.6,
    date: "novembro 28, 2020",
  },
  {
    id: "nova-fabrica-randon-triel-ht",
    title: "Projeto de Nova Fábrica Randon Triel-HT",
    description:
      "Local: Erechim/RS Estudo luminotécnico realizado para nova fábrica da Triel-HT em Erechim/RS Área total em torno de 40.183,46m² Modelamento 3D de toda planta Avaliação dos índices luminotécnicos",
    image: novaFabricaRandonTrielHtBannerMelhorado,
    delay: 0.7,
    date: "novembro 28, 2020",
  },
  {
    id: "ar-condicionado-nova-salas",
    title: "Projeto de Ar Condicionados para Nova Salas",
    description:
      "Local: Campo Bom/RS Cargas Instaladas 100kVA Projeto elétrico completo para instalação Cálculo de alimentadores BT Projeto de painéis elétricos Adequação do QGBT",
    image: projetoArCondionadosMelhorado,
    delay: 0.8,
    date: "setembro 13, 2020",
  },
  {
    id: "renner-otavio-rocha",
    title: "Adequação de Projetos Elétricos Renner Otávio Rocha",
    description:
      "Local: Porto Alegre/RS Adequação dos projetos para elaboração de documentação para concorrência Elaboração de projetos elétricos Memorial descritivo para concorrência Cálculo de alimentadores BT e MT Levantamento de campo",
    image: projetoEletricoRennerOtavioRochaBanner,
    delay: 0.9,
    date: "setembro 13, 2020",
  },
  {
    id: "glp-suape-ii",
    title: "Projeto Elétrico e Hidráulico Nova Planta GLP Suape II",
    description:
      "Local: Ipojuca/PE Área total: 36.386,13m² Projeto elétrico e hidráulico Potência elétrica de BT completo para o empreendimento; Projetos eluviais e água potável completos para o empreendimento; Projetos hidrossanitários completos",
    image: projetoEletricoHidraulicoNovaPlantaGlpBanner,
    delay: 1.0,
    date: "setembro 13, 2020",
  },
  {
    id: "zaffari-500kva",
    title: "Projeto Nova Subestação 500kVA CIA Zaffari Comércio e Indústria – Central de Distribuição",
    description:
      "Local: São Paulo/SP Projeto Elétrico Nova Subestação Transformadora Potência Instalada 500kVA Projeto Elétrico Completo Cálculo de Alimentadores BT e MT Toda documentação técnica para aprovação na ENEL",
    image: projetoNovaSubestacaoCiaZaffariBannerMelhorado,
    delay: 1.1,
    date: "setembro 13, 2020",
  },
  {
    id: "yapp-3750kva",
    title: "Projeto Subestação 3,75MVA Yapp Automotive",
    description:
      "Local: Cachoeirinha/RS Projeto Elétrico Nova Subestação Transformadora Potenciada Instalada 3750kVA Projeto Elétrico Completo Cálculo de Alimentadores BT e MT Levantamento de Campo",
    image: projetoSubestacaoYappAutomotiveBannerMelhorado,
    delay: 1.2,
    date: "setembro 13, 2020",
  },
  {
    id: "souza-cruz-filtro-manga",
    title: "Projeto Filtro de Manga – Souza Cruz",
    description:
      "Local: Cachoeirinha/RS Projeto de filtro de manga – Solidworks Projeto Mecânico no Solidworks Detalhamento de peças para fabricação Levantamento de campo para projeto",
    image: projetoFiltroDeMangaSouzaCruzBannerMelhorado,
    delay: 1.3,
    date: "setembro 13, 2020",
  },
  {
    id: "sl-brasil-ampliacao",
    title: "Projeto de Ampliação da empresa SL do Brasil",
    description:
      "Local: Gravataí/RS Área total 5.769,86m² Área ampliada: 1.500m² Projeto de PPCI área total 5.769,86m² Aprovação nos Bombeiros Projetos Elétrico Projetos Luminotécnico Projetos de Aterramento Projetos Hidrossanitários Projetos de Utilidades",
    image: projetoAmpliacaoSlDoBrasilBannerMelhorado,
    delay: 1.4,
    date: "setembro 13, 2020",
  },
];
const Projects = () => {
  const theme = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = window.innerWidth <= 768;

    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: !isMobile,
      slidesToShow: 4, // Mostrar 3 cards por vez em telas maiores
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      afterChange: (index) => setCurrentSlide(index), // update current slide

      customPaging: (i) => (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: i === currentSlide ? "#00bbf0" : "#cccccc",
          }}
        ></div>
      ),
      responsive: [
        {
          breakpoint: 960, // md
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600, // sm
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <Box
      sx={{
        py: 5,
        background: "linear-gradient(to bottom, #060608 50%, #121629 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('/images/circuit-pattern.png')",
          opacity: 0.1,
          zIndex: 1,
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            color: "white",
            fontWeight: "600",
            mb: 12,
            fontFamily: "Poppins",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -16,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 4,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            },
          }}
        >
          Nossos Projetos
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "grey.100",
            fontSize: { xs: 18, md: 22 },
            mb: 12,
            fontFamily: "Poppins",
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
        >
          Conheça alguns dos nossos principais cases de sucesso em engenharia
          multidisciplinar.
        </Typography>
      </motion.div>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          margin: "auto",
          width: {
            xs: "100%",
            sm: "90%",
  
          },
          padding: {
            xs: 2,
            sm: 2,
            lg: 3,
            xl: 6,
          },
          backgroundColor: "transparent",
        }}
      >
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </motion.div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Projects;
