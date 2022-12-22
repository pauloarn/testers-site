export enum TipoVagasEnum {
  ANALISTA_REQUISITOS = 'ANALISTA_REQUISITOS',
  ANALISTA_SISTEMAS = 'ANALISTA_SISTEMAS',
  ANALISTA_PROJETOS = 'ANALISTA_PROJETOS',
  ANALISTA_QUALIDADE = 'ANALISTA_QUALIDADE',
  TESTER = 'TESTER',
  DESENVOLVEDOR_FRONT_REACT = 'DESENVOLVEDOR_FRONT_REACT',
  DESENVOLVEDOR_FRONT_ANGULAR = 'DESENVOLVEDOR_FRONT_ANGULAR',
  DESENVOLVEDOR_BACKEND_JAVA = 'DESENVOLVEDOR_BACKEND_JAVA',
  DESENVOLVEDOR_FULLSTACK = 'DESENVOLVEDOR_FULLSTACK',
  DESENVOLVEDOR_MOBILE_FLUTTER = 'DESENVOLVEDOR_MOBILE_FLUTTER',
  ARQUITETO_DE_SOFTWARE = 'ARQUITETO_DE_SOFTWARE',
  DEVOPS = 'DEVOPS',
  PRODUCT_OWNER = 'PRODUCT_OWNER',
  PRODUCT_MANAGER = 'PRODUCT_MANAGER',
  GERENTE_DE_PROJETOS = 'GERENTE_DE_PROJETOS'
}

export const tipoVagas: Options<TipoVagasEnum>[] = [
  {
    value: TipoVagasEnum.ANALISTA_REQUISITOS,
    label: 'Analista de Requisitos'
  },
  {
    value: TipoVagasEnum.ANALISTA_SISTEMAS,
    label: 'Analista de Sistemas'
  },
  {
    label: 'Analista de Projetos',
    value: TipoVagasEnum.ANALISTA_PROJETOS
  },
  {
    label: 'Analita de Qualidade',
    value: TipoVagasEnum.ANALISTA_QUALIDADE
  },
  {
    label: 'Tester',
    value: TipoVagasEnum.TESTER
  },
  {
    label: 'Desenvovedor Frontend React',
    value: TipoVagasEnum.DESENVOLVEDOR_FRONT_REACT
  },
  {
    label: 'Desenvolvedor Frontend Angular',
    value: TipoVagasEnum.DESENVOLVEDOR_FRONT_ANGULAR
  },
  {
    label: 'Desenvolvedor Backend Java',
    value: TipoVagasEnum.DESENVOLVEDOR_BACKEND_JAVA
  },
  {
    label: 'Desenvolvedor Fullstack',
    value: TipoVagasEnum.DESENVOLVEDOR_FULLSTACK
  },
  {
    label: 'Desenvolvedor Mobile Flutter',
    value: TipoVagasEnum.DESENVOLVEDOR_MOBILE_FLUTTER
  },
  {
    label: 'Aquiteto de software',
    value: TipoVagasEnum.ARQUITETO_DE_SOFTWARE
  },
  {
    label: 'DevOps',
    value: TipoVagasEnum.DEVOPS
  },
  {
    label: 'Product Owner',
    value: TipoVagasEnum.PRODUCT_OWNER
  },
  {
    label: 'Product Manager',
    value: TipoVagasEnum.PRODUCT_MANAGER
  },
  {
    label: 'Gerente de Projetos',
    value: TipoVagasEnum.GERENTE_DE_PROJETOS
  }
]

interface Options<T> {
  label: string
  value: T
}

export enum TipoSenioridadeEnum {
  JUNIOR = 'JUNIOR',
  PLENO = 'PLENO',
  SENIOR = 'SENIOR',
  ESPECIALISTA = 'ESPECIALISTA'
}

export const senioridades: Options<TipoSenioridadeEnum>[] = [
  {
    label: 'Júnior',
    value: TipoSenioridadeEnum.JUNIOR
  },
  {
    label: 'Pleno',
    value: TipoSenioridadeEnum.PLENO
  },
  {
    label: 'Senior',
    value: TipoSenioridadeEnum.SENIOR
  },
  {
    label: 'Especialista',
    value: TipoSenioridadeEnum.ESPECIALISTA
  }
]

export enum SexoEnum {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
  TRANSGENERO = 'TRANSGENERO',
  NAO_BINARIO = 'NAO_BINARIO'
}
export const sexoOptions: Options<SexoEnum>[] = [
  {
    label: 'Masculino',
    value: SexoEnum.MASCULINO
  },
  {
    label: 'Feminino',
    value: SexoEnum.FEMININO
  },
  {
    label: 'Trangênero',
    value: SexoEnum.TRANSGENERO
  },
  {
    label: 'Não Binário',
    value: SexoEnum.NAO_BINARIO
  }
]

export enum EstadoCivilEnum {
  SOLTEIRO = 'SOLTEIRO',
  CASADO = 'CASADO',
  DIVORCIADO = 'DIVORCIADO',
  VIUVO = 'VIUVO',
  SEPARADO = 'SEPARADO',
  UNIAO_ESTAVEL = 'UNIAO_ESTAVEL',
  NAO_INFORMAR = 'NAO_INFORMAR'
}

export const estadoCivilOptions: Options<EstadoCivilEnum>[] = [
  {
    label: 'Solteiro (a)',
    value: EstadoCivilEnum.SOLTEIRO
  },
  {
    label: 'Casado (a)',
    value: EstadoCivilEnum.CASADO
  },
  {
    label: 'Divociado (a)',
    value: EstadoCivilEnum.DIVORCIADO
  },
  {
    label: 'Viúvo (a)',
    value: EstadoCivilEnum.VIUVO
  },
  {
    label: 'Separado (a)',
    value: EstadoCivilEnum.SEPARADO
  },
  {
    label: 'União Estável',
    value: EstadoCivilEnum.UNIAO_ESTAVEL
  },
  {
    label: 'Não Informar',
    value: EstadoCivilEnum.NAO_INFORMAR
  }
]
