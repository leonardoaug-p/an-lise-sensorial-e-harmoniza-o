// Componente de Resumo da Análise
class ResumoAnalise extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.unidade = this.getAttribute('unidade') || 'geral';
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['unidade'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'unidade' && oldValue !== newValue) {
      this.unidade = newValue;
      this.render();
    }
  }

  render() {
    const dados = this.getDadosPorUnidade();
    
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
          background-color: #2c3e50;
          color: white;
          padding: 15px 20px;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .content {
          padding: 20px;
          background-color: white;
        }
        .section {
          margin-bottom: 20px;
        }
        .section-title {
          font-weight: bold;
          color: #2980b9;
          margin-bottom: 10px;
          border-bottom: 1px solid #eee;
          padding-bottom: 5px;
        }
        .points-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .points-column {
          flex: 1;
          min-width: 250px;
        }
        .points-title {
          font-weight: bold;
          margin-bottom: 8px;
          color: #333;
        }
        ul {
          margin: 0;
          padding-left: 20px;
        }
        li {
          margin-bottom: 8px;
        }
        .footer {
          background-color: #f5f5f5;
          padding: 10px 15px;
          font-size: 14px;
          color: #666;
          text-align: right;
        }
        .badge {
          background-color: #3498db;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px;
        }
      </style>
      
      <div class="container">
        <div class="header">
          ${dados.titulo}
          <span class="badge">Análise 2025</span>
        </div>
        <div class="content">
          <div class="section">
            <div class="section-title">Visão Geral</div>
            <p>${dados.visaoGeral}</p>
          </div>
          
          <div class="section">
            <div class="section-title">Qualidade da Escrita</div>
            <div class="points-container">
              <div class="points-column">
                <div class="points-title">Pontos Fortes</div>
                <ul>
                  ${dados.escritaPontosFortes.map(ponto => `<li>${ponto}</li>`).join('')}
                </ul>
              </div>
              <div class="points-column">
                <div class="points-title">Pontos a Melhorar</div>
                <ul>
                  ${dados.escritaPontosMelhorar.map(ponto => `<li>${ponto}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Conteúdo Acadêmico</div>
            <div class="points-container">
              <div class="points-column">
                <div class="points-title">Pontos Fortes</div>
                <ul>
                  ${dados.conteudoPontosFortes.map(ponto => `<li>${ponto}</li>`).join('')}
                </ul>
              </div>
              <div class="points-column">
                <div class="points-title">Pontos a Melhorar</div>
                <ul>
                  ${dados.conteudoPontosMelhorar.map(ponto => `<li>${ponto}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Aspectos Visuais</div>
            <div class="points-container">
              <div class="points-column">
                <div class="points-title">Pontos Fortes</div>
                <ul>
                  ${dados.visualPontosFortes.map(ponto => `<li>${ponto}</li>`).join('')}
                </ul>
              </div>
              <div class="points-column">
                <div class="points-title">Pontos a Melhorar</div>
                <ul>
                  ${dados.visualPontosMelhorar.map(ponto => `<li>${ponto}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">Análise realizada em Abril de 2025</div>
      </div>
    `;
  }

  getDadosPorUnidade() {
    const unidades = {
      geral: {
        titulo: 'Análise Geral do Livro',
        visaoGeral: 'O livro "Análise Sensorial e Harmonização" apresenta qualidade acadêmica satisfatória, com fundamentação teórica sólida e excelente adequação pedagógica. A obra equilibra rigor acadêmico com abordagem didática, sendo adequada tanto para estudantes quanto para profissionais do setor.',
        escritaPontosFortes: [
          'Linguagem clara e acessível, mesmo ao tratar de temas técnicos',
          'Boa progressão lógica dos conceitos',
          'Uso eficiente de exemplos práticos',
          'Equilíbrio entre rigor técnico e acessibilidade',
          'Tom conversacional que engaja o leitor'
        ],
        escritaPontosMelhorar: [
          'Algumas explicações técnicas poderiam ser mais concisas',
          'Em certos trechos, há repetição de conceitos já apresentados',
          'Alguns parágrafos têm densidade de informação elevada'
        ],
        conteudoPontosFortes: [
          'Explicações claras sobre os mecanismos fisiológicos da percepção de sabor',
          'Abordagem técnica sobre a origem dos off-flavors',
          'Contextualização histórica das diferentes escolas cervejeiras',
          'Conexão entre aspectos técnicos e culturais da produção de cerveja'
        ],
        conteudoPontosMelhorar: [
          'Poderia incluir mais dados quantitativos',
          'A discussão sobre métodos analíticos poderia ser mais aprofundada',
          'Faltam referências a estudos científicos recentes',
          'A discussão sobre análise estatística dos dados poderia ser mais detalhada'
        ],
        visualPontosFortes: [
          'Layout limpo com boa distribuição de texto e imagens',
          'Uso eficiente de boxes coloridos',
          'Seções claramente identificadas com títulos e subtítulos',
          'Boa hierarquia visual que facilita a navegação pelo conteúdo'
        ],
        visualPontosMelhorar: [
          'Algumas páginas têm densidade de texto elevada',
          'O espaçamento entre elementos gráficos poderia ser mais consistente',
          'Poderia incluir mais diagramas explicativos',
          'Faltam representações visuais de processos químicos'
        ]
      },
      unidade1: {
        titulo: 'Análise da Unidade 1: Análise Sensorial',
        visaoGeral: 'A Unidade 1 aborda os fundamentos da análise sensorial, sensações básicas e avaliação sensorial de alimentos. Apresenta conteúdo de boa qualidade acadêmica e didática, com escrita clara e acessível, fornecendo uma base sólida para compreender os conceitos fundamentais da análise sensorial.',
        escritaPontosFortes: [
          'Linguagem clara e didática',
          'Progressão lógica dos conceitos',
          'Uso de exemplos práticos e aplicáveis',
          'Tom conversacional que engaja o leitor'
        ],
        escritaPontosMelhorar: [
          'Algumas explicações poderiam ser mais concisas',
          'Em certos trechos, há repetição de informações',
          'Alguns parágrafos têm densidade de informação elevada'
        ],
        conteudoPontosFortes: [
          'Explicação clara sobre os mecanismos fisiológicos da percepção sensorial',
          'Abordagem atualizada sobre o mapa da língua',
          'Discussão detalhada sobre os cinco gostos básicos',
          'Conexão entre aspectos teóricos e aplicações práticas'
        ],
        conteudoPontosMelhorar: [
          'Poderia incluir mais referências a estudos científicos recentes',
          'A discussão sobre métodos estatísticos poderia ser mais aprofundada',
          'Faltam exemplos de aplicações em contextos industriais modernos'
        ],
        visualPontosFortes: [
          'Imagens nítidas e bem enquadradas',
          'Uso eficiente de boxes coloridos',
          'Seções bem delimitadas com títulos claros',
          'Boa hierarquia visual que facilita a navegação pelo conteúdo'
        ],
        visualPontosMelhorar: [
          'Algumas páginas apresentam densidade de texto elevada',
          'Poderia incluir mais diagramas explicativos sobre os processos sensoriais',
          'O espaçamento entre elementos gráficos poderia ser mais consistente'
        ]
      },
      unidade2: {
        titulo: 'Análise da Unidade 2: Análise de Cervejas',
        visaoGeral: 'A Unidade 2 aborda a análise sensorial de bebidas, off-flavors e cervejas alemãs e britânicas. Apresenta conteúdo de boa qualidade acadêmica e didática, com escrita clara e acessível, estabelecendo conexões interessantes entre aspectos técnicos, sensoriais, históricos e culturais da produção cervejeira.',
        escritaPontosFortes: [
          'Linguagem fluida e de fácil compreensão',
          'Boa contextualização histórica e cultural das escolas cervejeiras',
          'Uso de exemplos práticos relacionados à cerveja',
          'Tom que equilibra informação técnica com aspectos culturais'
        ],
        escritaPontosMelhorar: [
          'Algumas explicações técnicas poderiam ser mais detalhadas',
          'Em certos trechos, há informações que poderiam ser mais aprofundadas',
          'Alguns parágrafos têm densidade de informação elevada'
        ],
        conteudoPontosFortes: [
          'Explicação clara sobre a diferença entre on-flavors e off-flavors',
          'Abordagem técnica sobre a origem dos off-flavors',
          'Contextualização histórica da Lei da Pureza alemã',
          'Conexão entre aspectos técnicos e culturais da produção de cerveja'
        ],
        conteudoPontosMelhorar: [
          'Poderia incluir mais dados quantitativos sobre limiares de percepção',
          'A discussão sobre métodos analíticos poderia ser mais aprofundada',
          'Faltam referências a estudos científicos recentes',
          'A discussão sobre a influência das escolas na cervejaria brasileira poderia ser mais aprofundada'
        ],
        visualPontosFortes: [
          'Fotografias coloridas que mostram diferentes tipos de cervejas',
          'Uso eficiente de boxes coloridos',
          'Seções bem delimitadas com títulos claros',
          'Boa hierarquia visual que facilita a navegação pelo conteúdo'
        ],
        visualPontosMelhorar: [
          'Poderia incluir mais diagramas explicativos sobre os processos químicos',
          'Faltam representações visuais das moléculas responsáveis pelos principais off-flavors',
          'Poderia incluir mais imagens comparativas entre os diferentes estilos'
        ]
      },
      unidade3: {
        titulo: 'Análise da Unidade 3: Harmonização e Painéis',
        visaoGeral: 'A Unidade 3 aborda cervejas belgas e americanas, harmonização de alimentos e bebidas, e administração de painéis sensoriais. Apresenta conteúdo de boa qualidade acadêmica e didática, com escrita clara e envolvente, estabelecendo conexões interessantes entre aspectos sensoriais, químicos, culturais e gerenciais.',
        escritaPontosFortes: [
          'Linguagem clara e envolvente',
          'Boa contextualização da importância da harmonização',
          'Uso de exemplos práticos e cenários realistas',
          'Tom que equilibra informação técnica com aspectos práticos'
        ],
        escritaPontosMelhorar: [
          'Algumas explicações sobre reações químicas poderiam ser mais detalhadas',
          'Em certos trechos, há informações que poderiam ser mais aprofundadas',
          'Alguns procedimentos específicos poderiam ser mais detalhados'
        ],
        conteudoPontosFortes: [
          'Explicação clara sobre as características distintivas das escolas cervejeiras',
          'Abordagem técnica sobre a correlação entre características da bebida e alimentos',
          'Discussão sobre a importância da avaliação sensorial na harmonização',
          'Explicação detalhada sobre a seleção e treinamento de degustadores'
        ],
        conteudoPontosMelhorar: [
          'Poderia incluir mais exemplos específicos de harmonizações',
          'A discussão sobre reações químicas poderia ser mais aprofundada',
          'Faltam referências a estudos científicos recentes',
          'A discussão sobre análise estatística dos dados poderia ser mais detalhada'
        ],
        visualPontosFortes: [
          'Fotografias que mostram cervejas em contexto com alimentos',
          'Imagem da sala de treinamento que ilustra o ambiente de painéis sensoriais',
          'Uso eficiente de boxes coloridos',
          'Seções bem delimitadas com títulos claros'
        ],
        visualPontosMelhorar: [
          'Poderia incluir mais imagens de harmonizações específicas',
          'Faltam diagramas explicativos sobre as reações químicas',
          'Poderia incluir mais fotografias que mostrem equipamentos específicos',
          'Algumas páginas apresentam densidade de texto elevada'
        ]
      }
    };

    return unidades[this.unidade] || unidades.geral;
  }
}

customElements.define('resumo-analise', ResumoAnalise);
