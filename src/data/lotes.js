export const lotes = [
  {
    id: 1,
    tipo: 'JUDICIAL',
    tribunal: 'TJ-SP',
    processo: '1031251-97.2023.8.26.0071',
    comarca: 'Bauru / SP',
    horario: '14:00:00',
    local: 'Online',
    titulo: 'Leilão de Imóvel Residencial em Bauru (SP)',
    endereco: 'Rua das Acácias, nº 142, Jardim Bela Vista, Bauru/SP',
    area: '187 m²',
    descricao: `Imóvel residencial localizado no Jardim Bela Vista, Bauru/SP, com área total de 187m².
    Trata-se de casa térrea com 3 dormitórios, 2 banheiros, sala, cozinha, área de serviço e garagem para 2 veículos.
    O imóvel está sendo leiloado por determinação judicial no âmbito do processo de execução nº 1031251-97.2023.8.26.0071,
    perante o Tribunal de Justiça do Estado de São Paulo.

    Valor da Avaliação: R$ 485.000,00
    Lance Mínimo: R$ 242.500,00

    Débitos Tributários: Eventuais débitos de IPTU sub-rogam-se no valor da arrematação (Art. 130, CPC).
    Débito Condominial: Eventuais débitos condominiais ficarão sub-rogados no valor da arrematação.

    Condições de Venda: À vista ou parcelado (25% de sinal + 30 parcelas).`,
    praças: [
      { numero: '1ª Praça', abertura: '15/05/2026 14:00', fechamento: '19/05/2026 14:00', lance: 'R$ 485.000,00' },
      { numero: '2ª Praça', abertura: '19/05/2026 14:00', fechamento: '26/05/2026 14:00', lance: 'R$ 242.500,00' },
    ],
    desconto: '50%',
    incremento: 'R$ 2.000,00',
    fotos: [
      '/assets/img/lotes/lote1/foto1.png',
      '/assets/img/lotes/lote1/foto2.png',
      '/assets/img/lotes/lote1/foto3.png',
    ],
    status: 'Aberto',
    statusClass: 'status-aberto',
  },
  {
    id: 2,
    tipo: 'JUDICIAL',
    tribunal: 'TJ-SP',
    processo: '1008086-13.2018.8.26.0292',
    comarca: 'Jacareí / SP',
    horario: '14:00:00',
    local: 'Online',
    titulo: 'Leilão de Apartamento em Jacareí (SP)',
    endereco: 'Rua Benedito Campos, nº 310, Apto 52, Centro, Jacareí/SP',
    area: '72 m²',
    descricao: `Apartamento localizado no Centro de Jacareí/SP, com área privativa de 72m².
    O imóvel possui 2 dormitórios, 1 banheiro, sala, cozinha, área de serviço e 1 vaga de garagem.
    Situado em edifício com elevador, portaria 24h e área de lazer.
    Leilão realizado por determinação do Tribunal de Justiça de São Paulo, no processo de execução nº 1008086-13.2018.8.26.0292.

    Valor da Avaliação: R$ 310.000,00
    Lance Mínimo: R$ 155.000,00

    Débitos Tributários: Não há débitos de IPTU até a data de confecção deste edital.
    Débito Condominial: Eventuais débitos condominiais ficarão sub-rogados no valor da arrematação.

    Condições de Venda: À vista ou parcelado (25% de sinal + 30 parcelas).`,
    praças: [
      { numero: '1ª Praça', abertura: '20/05/2026 14:00', fechamento: '25/05/2026 14:00', lance: 'R$ 310.000,00' },
      { numero: '2ª Praça', abertura: '25/05/2026 14:00', fechamento: '01/06/2026 14:00', lance: 'R$ 155.000,00' },
    ],
    desconto: '50%',
    incremento: 'R$ 1.000,00',
    fotos: [
      '/assets/img/lotes/lote2/foto1.png',
      '/assets/img/lotes/lote2/foto2.png',
      '/assets/img/lotes/lote2/foto3.png',
      '/assets/img/lotes/lote2/foto4.png',
      '/assets/img/lotes/lote2/foto5.png',
      '/assets/img/lotes/lote2/foto6.png',
      '/assets/img/lotes/lote2/foto7.png',
    ],
    status: 'Aberto',
    statusClass: 'status-aberto',
  },
  {
    id: 3,
    tipo: 'JUDICIAL',
    tribunal: 'TJ-SP',
    processo: '1031249-30.2023.8.26.0071',
    comarca: 'Bauru / SP',
    horario: '14:00:00',
    local: 'Online',
    titulo: 'Leilão de Terreno Comercial em Bauru (SP)',
    endereco: 'Av. Nações Unidas, nº 17-17, Vila Santo Antônio, Bauru/SP',
    area: '320 m²',
    descricao: `Terreno de uso comercial localizado na Avenida Nações Unidas, uma das principais vias comerciais de Bauru/SP,
    com área total de 320m² e testada de 16m. O terreno está em região de alto fluxo comercial, próximo a bancos,
    comércio e serviços. Leilão determinado pelo Tribunal de Justiça de São Paulo no processo nº 1031249-30.2023.8.26.0071.

    Valor da Avaliação: R$ 620.000,00
    Lance Mínimo: R$ 310.000,00

    Débitos Tributários: Eventuais débitos de IPTU sub-rogam-se no valor da arrematação.

    Condições de Venda: À vista ou parcelado (25% de sinal + 30 parcelas).`,
    praças: [
      { numero: '1ª Praça', abertura: '22/05/2026 14:00', fechamento: '27/05/2026 14:00', lance: 'R$ 620.000,00' },
      { numero: '2ª Praça', abertura: '27/05/2026 14:00', fechamento: '03/06/2026 14:00', lance: 'R$ 310.000,00' },
    ],
    desconto: '50%',
    incremento: 'R$ 3.000,00',
    fotos: [
      '/assets/img/lotes/lote3/foto1.png',
      '/assets/img/lotes/lote3/foto2.png',
      '/assets/img/lotes/lote3/foto3.png',
    ],
    status: 'Aberto',
    statusClass: 'status-aberto',
  },
  {
    id: 4,
    tipo: 'JUDICIAL',
    tribunal: 'TJ-GO',
    processo: '0018319-83.2008.8.09.0139',
    comarca: 'Rubiataba / GO',
    horario: '14:00:00',
    local: 'Online',
    titulo: 'Leilão de Imóvel Rural em Rubiataba (GO)',
    endereco: 'Fazenda Santa Cruz, Zona Rural, Rubiataba/GO',
    area: '24,2 alqueires',
    descricao: `Imóvel rural denominado "Fazenda Santa Cruz", localizado na Zona Rural de Rubiataba/GO,
    com área total de 24,2 alqueires (aproximadamente 117 hectares). A propriedade conta com pastagem formada,
    curral, casa de alvenaria, poço artesiano e açude. Acesso por estrada vicinal em boas condições.
    Leilão determinado pelo Tribunal de Justiça do Estado de Goiás, processo nº 0018319-83.2008.8.09.0139.

    Valor da Avaliação: R$ 1.820.000,00
    Lance Mínimo: R$ 910.000,00

    Débitos Tributários: Eventuais débitos de ITR sub-rogam-se no valor da arrematação.

    Condições de Venda: À vista ou parcelado (25% de sinal + 30 parcelas).`,
    praças: [
      { numero: '1ª Praça', abertura: '10/06/2026 14:00', fechamento: '15/06/2026 14:00', lance: 'R$ 1.820.000,00' },
      { numero: '2ª Praça', abertura: '15/06/2026 14:00', fechamento: '22/06/2026 14:00', lance: 'R$ 910.000,00' },
    ],
    desconto: '50%',
    incremento: 'R$ 5.000,00',
    fotos: [
      '/assets/img/lotes/lote4/foto1.png',
      '/assets/img/lotes/lote4/foto2.png',
    ],
    status: 'Aberto',
    statusClass: 'status-aberto',
  },
]
