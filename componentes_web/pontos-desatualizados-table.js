// Componente de Tabela de Pontos Desatualizados
class PontosDesatualizadosTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.categoria = this.getAttribute('categoria') || 'tecnologias';
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['categoria'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'categoria' && oldValue !== newValue) {
      this.categoria = newValue;
      this.render();
    }
  }

  render() {
    const dados = this.getDadosPorCategoria();
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 20px 0;
        }
        .container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #2980b9;
          color: white;
          padding: 15px 20px;
          font-size: 18px;
          font-weight: bold;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background-color: white;
        }
        th {
          background-color: #3498db;
          color: white;
          text-align: left;
          padding: 12px 15px;
        }
        td {
          padding: 12px 15px;
          border-bottom: 1px solid #eee;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        tr:hover {
          background-color: #f1f1f1;
        }
        .footer {
          background-color: #f5f5f5;
          padding: 10px 15px;
          font-size: 14px;
          color: #666;
          text-align: right;
        }
      </style>
      
      <div class="container">
        <div class="header">${dados.titulo}</div>
        <table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Conteúdo Desatualizado</th>
              <th>Contexto Atual (2025)</th>
            </tr>
          </thead>
          <tbody>
            ${dados.itens.map(item => `
              <tr>
                <td>${item.tema}</td>
                <td>${item.desatualizado}</td>
                <td>${item.atual}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="footer">Análise realizada em Abril de 2025</div>
      </div>
    `;
  }

  getDadosPorCategoria() {
    const categorias = {
      tecnologias: {
        titulo: 'Tecnologias e Métodos Desatualizados',
        itens: [
          {
            tema: 'Análise Sensorial',
            desatualizado: 'Métodos tradicionais de coleta de dados sensoriais baseados apenas em formulários físicos',
            atual: 'Sistemas digitais integrados com IA para captura e análise em tempo real de reações sensoriais, incluindo reconhecimento facial para análise de microexpressões'
          },
          {
            tema: 'Análise Sensorial',
            desatualizado: 'Ausência de menção a narizes eletrônicos e línguas artificiais',
            atual: 'Sensores eletrônicos de última geração com capacidade de detecção superior à humana para certos compostos, integrados com sistemas de IA para interpretação de dados'
          },
          {
            tema: 'Off-Flavors',
            desatualizado: 'Métodos analíticos convencionais para detecção de off-flavors',
            atual: 'Sistemas automatizados de monitoramento em tempo real que se tornaram padrão na indústria cervejeira, permitindo detecção precoce e prevenção'
          },
          {
            tema: 'Painéis Sensoriais',
            desatualizado: 'Painéis sensoriais exclusivamente presenciais',
            atual: 'Painéis sensoriais remotos ou híbridos que se tornaram padrão na indústria após 2023, permitindo colaboração global e maior diversidade de avaliadores'
          }
        ]
      },
      referencias: {
        titulo: 'Referências e Recursos Educacionais Desatualizados',
        itens: [
          {
            tema: 'Geral',
            desatualizado: '"Recursos de mídia disponíveis no conteúdo digital do ambiente virtual de aprendizagem"',
            atual: 'Ambientes de aprendizagem imersivos com realidade aumentada e virtual, simulações interativas e experiências sensoriais digitais'
          },
          {
            tema: 'Geral',
            desatualizado: 'QR Codes direcionando para conteúdos estáticos',
            atual: 'Tecnologias de conteúdo adaptativo que personalizam a experiência educacional com base no perfil e progresso do estudante'
          },
          {
            tema: 'Geral',
            desatualizado: 'Referência à ABNT (2019)',
            atual: 'Novas normas técnicas publicadas entre 2023-2025 sobre painéis sensoriais, metodologias de análise e padrões de qualidade'
          },
          {
            tema: 'Harmonização',
            desatualizado: 'Link para vídeo no YouTube',
            atual: 'Plataformas educacionais especializadas com conteúdo interativo e atualizado regularmente'
          }
        ]
      },
      mercado: {
        titulo: 'Tendências de Mercado e Produção Desatualizadas',
        itens: [
          {
            tema: 'Cervejas Alemãs e Britânicas',
            desatualizado: 'Discussão sobre a presença de cervejas alemãs no Brasil',
            atual: 'Mudanças significativas no mercado cervejeiro brasileiro entre 2024-2025, incluindo novas tendências de consumo e produção local de estilos alemães'
          },
          {
            tema: 'Cervejas Belgas e Americanas',
            desatualizado: 'Tendências de cervejas artesanais até 2020',
            atual: 'Novas tendências de cervejas belgas e americanas que surgiram entre 2024-2025, como estilos híbridos e técnicas de fermentação inovadoras'
          },
          {
            tema: 'Produção Cervejeira',
            desatualizado: 'Ausência de discussão sobre mudanças climáticas',
            atual: 'Impacto significativo das mudanças climáticas na produção de matérias-primas cervejeiras, tema que ganhou grande relevância entre 2023-2025'
          },
          {
            tema: 'Produção Cervejeira',
            desatualizado: 'Ausência de discussão sobre sustentabilidade',
            atual: 'Práticas sustentáveis que se tornaram essenciais na indústria cervejeira, incluindo economia circular, redução de pegada hídrica e carbono neutro'
          }
        ]
      },
      educacao: {
        titulo: 'Abordagens Educacionais e Treinamento Desatualizados',
        itens: [
          {
            tema: 'Treinamento Sensorial',
            desatualizado: 'Métodos tradicionais de treinamento sensorial',
            atual: 'Programas de treinamento sensorial assistidos por IA com feedback em tempo real e adaptação personalizada'
          },
          {
            tema: 'Treinamento de Equipe',
            desatualizado: 'Abordagem convencional de treinamento em brewpubs',
            atual: 'Novas tecnologias de treinamento baseadas em IA e simulação que se tornaram comuns em 2025, permitindo experiências virtuais de degustação'
          },
          {
            tema: 'Educação Cervejeira',
            desatualizado: 'Abordagem teórica tradicional',
            atual: 'Metodologias de aprendizagem experiencial e gamificada que dominam a educação cervejeira em 2025'
          },
          {
            tema: 'Certificações',
            desatualizado: 'Menção a certificações anteriores a 2020',
            atual: 'Novas certificações e padrões internacionais estabelecidos entre 2023-2025, com maior ênfase em habilidades digitais e sustentabilidade'
          }
        ]
      }
    };

    return categorias[this.categoria] || categorias.tecnologias;
  }
}

customElements.define('pontos-desatualizados-table', PontosDesatualizadosTable);
