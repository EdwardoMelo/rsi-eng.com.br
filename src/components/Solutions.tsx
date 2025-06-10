import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Slide,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SectionDivider from "./SectionDivider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  projetosEletricos,
  projetosArquitetonicos,
  projetosAutomacao,
  projetosHidraulicos,
  projetosMecanicos,
  projetosPpci,
  projetosTelecom,
  estudos,
  documentacao,
  engenhariaSeguranca,
  paineisEletricos,
  comissionamentoSubestacoes
} from "@/assets";

import SolutionCard from "./ui/SolutionCard";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const solutions = [
  {
    id: 1,
    title: "Projetos Elétricos",
    description: "Nossas soluções em projetos elétricos:",
    image: projetosEletricos,
    items: [
      "Subestações de média e alta tensão;",
      "Projetos e dimensionamento de aterramento para subestações de médio e grande porte com simulação gráfica;",
      "projeto de dimensionamento de distribuíção de força;",
      "Sistemas de iluminação, tomadas, energia estabilizada, CFTV e telecomunicações;",
      "Painéis elétricos de pequenos a grande porte, QGBT’s, QTA’s, CCM’s e painéis de automação;",
      "Projeto luminotécnico;",
      "Certificação LEED;",
      "SPDA conforme NBR5419/2015;",
      "Automação e controle;",
      "Projetos de instrumentação;",
      "Dimensionamento de arquiteturas redes de automação;",
      "Prontuário de instalações elétricas;",
      "Projeto em BIM de instalações elétricas;",
      "Aprovação de projetos em concessionária de energia;",
      "Acessoria e gerenciamento de obras elétricas;",
      "Laudos de sistemas elétricos;",
      "Cálculo de curto circuito e seletividade com o PTW32.",
    ],
  },
  {
    id: 2,
    title: "Projetos Hidráulicos",
    description: "Nossas soluções em projetos hidráulicos:",
    image: projetosHidraulicos,
    items: [
      "Sistemas pluviais;",
      "Sistemas cloacais;",
      "Hidrossanitários;",
      "Drenagem;",
      "Projeto de água de reuso;",
      "Ar comprimido;",
    ],
  },
  {
    id: 3,
    title: "Projetos PPCI",
    description: "Nossas soluções em projetos PPCI:",
    image: projetosPpci,
    items: [
      "Desenvolvimento de projetos padrão ABNT;",
      "Desenvolvimento de projetos AON;",
      "Desenvolvimento de projetos NFPA;",
      "Projetos com rede de hidrantes;",
    ],
  },
  {
    id: 4,
    title: "Projetos Mecânicos",
    description: "Nossas soluções em projetos mecânicos:",
    image: projetosMecanicos,
    items: [
      "Projetos de peças;",
      "Projetos de máquinas e adequações de NR's;",
      "Elaboração de layout fabril;",
      "Elaboração de plantas industriais;",
      "Elaboração e dimensionamento de serviços de utilidades;",
      "Dimensionamento 3D de projeto;",
      "Dimensionamento 2D de projeto;",
      "Laudos de estanqueidades;",
      "Teste Hidrostático;",
      "Plano de Rigging;",
      "Retrofiting de máquinas;",
      "Projeto mecânico de linha de vida;",
      "Ensaio de esforços mecânicos;",
      "Projeto e dimensionamento de tubulações;",
      "Instrumentação para utilidades;",
    ],
  },
  {
    id: 5,
    title: "Projetos de Telecom e Segurança",
    description: "Nossas soluções em projetos de telecom e segurança:",
    image: projetosTelecom,
    items: [
      "Projeto de cabeamento estruturado;",
      "Projeto de telefonia;",
      "Projeto de CFTV;",
      "Projeto de controle de acesso;",
      "Projeto de rede de fibra ótica;",
      "Projeto de infra;",
    ],
  },
  {
    id: 6,
    title: "Projetos Arquitetônicos",
    description: "Nossas soluções em projetos arquitetônicos:",
    image: projetosArquitetonicos,
    items: [
      "Elaboração de projetos em BIM;",
      "Projetos de arquiteturas residenciais;",
      "Projetos de arquiteturas industriais;",
      "Projetos para nível de concorrência;",
      "Pré projeto arquitetônico;",
    ],
  },
  {
    id: 7,
    title: "Projeto de Automação Industrial",
    description: "Nossas soluções em projetos de automação industrial:",
    image: projetosAutomacao,
    items: [
      "Projetos de painéis de automação em EPLAN;",
      "Projetos com controladores lógicos programáveis – CLP;",
      "Projeto de arquitetura de redes industriais;",
      "Projeto com sensores de atuadores industriais;",
      "Projetos eletropneumáticos;",
      "Sistemas provisórios em ambiente SCADA;",
      "Automação de subestação em IEC 61850;",
      "Automação de sistema de iluminação DALI;",
      "Automação residencial;",
      "Projetos especiais de automação;",
    ],
  },
  {
    id: 8,
    title: "Projeto de Painéis Elétricos",
    description: "Nossas soluções em projetos de painéis elétricos:",
    image: paineisEletricos,
    items: [
      "Projetos QGBT;",
      "Projetos de CCM's;",
      "Projetos de quadro de distribuição;",
      "Projetos de painéis de automação;",
      "Projetos de painéis de medição;",
    ],
    note: "Projetos elaborados a partir de ferramenta Eplan Eletric P8.",
  },
  {
    id: 9,
    title: "Comissionamento de Subestações",
    image: comissionamentoSubestacoes,
    items: [
      "Parametrização de relés de proteção;",
      "Ensaios de cubículos;",
      "Start-up;",
      "Comissionamento de subestações de 13.8kV até 138kV;",
      "Rede IEC61850;",
      "Laudos e ensaios;",
      "Dimensionamento da concepção;",
      "Consultorias;",
      "Acompanhamento;",
      "Teste primário de relés de proteção com mala de teste;",
    ],
  },
  {
    id: 10,
    title: "Estudos",
    image: estudos,
    items: [
      "Estudos para subestações;",
      "Estudos de curto circuito;",
      "Estudos de seletividades – ECS;",
      "Estudo de desempenho térmico do Arco Elétrico – ATPV;",
      "Elaboração de etiquetas de estudo de ARC Flash;",
      "Estudo de topologia;",
      "Estudo de medida de proteção contra surtos (MPS) para aterramento de subestações;",
      "Estudo de medida de proteção contra surtos (MPS) para SPDA de subestações;",
      "Estudos de malhas de aterramento;",
      "Estudos de campo eletromagnético;",
      "Estratificação de solo a partir de método de Werner;",
      "Laudo de SPDA;",
      "Laudo de Aterramento;",
      "Os estudos de ECS e ATPV são desenvolvidos a partir da ferramenta PTW32.",
    ],
  },
  {
    id: 11,
    title: "Documentação Técnica",
    description:
      "Elaboração de documentos técnicos essenciais para a realização de obras:",
    image: documentacao,
    items: [
      "Documentação para abertura de concorrência;",
      "Elaboração de Databook de obra;",
      "Prontuário de instalação elétrico (PIE);",
      "Cronogramas de obras;",
      "Histogramas de obras;",
      "Memoriais descritivos de instalações;",
      "Anteprojeto para concorrência;",
      "Verificação de visibilidade ambiental;",
      "Verificação de visibilidade elétrica;",
    ],
  },
  {
    id: 12,
    title: "Engenharia de Segurança do Trabalho",
    description:
      "A RSI Engenharia conta com diversos serviços e soluções na área de engenharia de segurança do trabalho, fazendo com que nossos clientes tenham total confiança no nosso trabalho.",
    image: engenhariaSeguranca,
    items: [
      "Consultoria técnica;",
      "Acompanhamento como perito assistente;",
      "PPRA;",
      "LTCT;",
      "Laudo de NR12;",
      "Laudo de N10;",
      "Dosimetria de ruído;",
      "Dosimetria de vibração;",
      "Laudo de iluminamento;",
      "Avaliação de calor;",
      "Proteção de linha de vida;",
    ],
  },
];



const Solutions = () => {

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
    <>
      <Box sx={{ py: 10, bgcolor: "background.default" }}>
        <Box sx={{ mb: 6 }}>
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

                borderRadius: 2,
              },
            }}
          >
            Principais Soluções
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
            Conheça as áreas de atuação e soluções oferecidas pela RSI
            Engenharia.
          </Typography>
         
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            margin: "auto",
            width: { 
              xs: '100%',
              sm: '90%',
         
            },
            padding: { 
              xs: 2,
              sm: 2,
              lg: 3,
              xl: 6
            },
            backgroundColor: "transparent",
          }}
        >
          <Slider {...sliderSettings}>
            {solutions.map((solution) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
         
                >
                  <SolutionCard
                    title={solution.title}
                    description={solution.description}
                    image={solution.image}
                    items={solution.items}
                  />
                </motion.div>
            ))}

          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Solutions;
