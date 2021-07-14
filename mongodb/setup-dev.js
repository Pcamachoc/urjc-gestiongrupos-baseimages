let res = [

  // DB Users

  db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [{
      role: 'dbOwner',
      db: 'urjcgestiongruposDB'
    }]
  }),

  // Roles

  db.createCollection('roles'),
  db.roles.insert({
    id: 'role-call-manager',
    name: 'Call Manager',
    functionalities: [
      'createCall',
      'getCalls',
      'deleteCallById',
      'getCallById',
      'getBallotResult',
      'updateCounterCall',
      'updateCall',
      'createInPersonVotes',
      'getBlockchainReport'
    ]
  }),

  db.roles.insert({
    id: 'role-vote-user',
    name: 'Vote User',
    functionalities: [
      'createVote',
      'getCalls',
      'getCallById',
      'getBallotResult',
      'getVotes',
      'getVoteById',
      'getVoteByIdWithHistory',
      'getVoteIdByParameters',
      'getBlockByTransactionId'
    ]
  }),

  // Groups

  db.createCollection('groups'),
  db.groups.insert({
      id: 'group-administrators',
      name: 'Administrators Group',
      roles: ['role-call-manager']
  }),

  db.groups.insert({
    id: 'group-students',
    name: 'Students Group',
    roles: ['role-vote-user']
  }),

  db.createCollection('users'),
  db.users.insert({
    id: 'id-isaac',
    name: 'Isaac',
    surname: 'Martín de Diego',
    username: 'isaacurjc',
    email: 'isaacurjc@urjc.es',
    enabled: true,
    initDate: '2019-05-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-administrators']
  }),

  db.users.insert({
    id: 'id-ana',
    name: 'Ana',
    surname: 'Pérez Fernández',
    username: 'anaurjc',
    email: 'anaurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-pablo',
    name: 'Pablo',
    surname: 'García López',
    username: 'pablourjc',
    email: 'pablourjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-07-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-maria',
    name: 'María',
    surname: 'Sánchez Ramos',
    username: 'mariaurjc',
    email: 'mariaurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-08-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-antonio',
    name: 'Antonio',
    surname: 'Delgado Ruiz',
    username: 'antoniourjc',
    email: 'antoniourjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-09-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-isabel',
    name: 'Isabel',
    surname: 'Moreno Gómez',
    username: 'isabelurjc',
    email: 'isabelurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-10-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-juan',
    name: 'Juan',
    surname: 'Gutierrez Navarro',
    username: 'juanurjc',
    email: 'juanurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-sara',
    name: 'Sara',
    surname: 'Rodríguez Martín',
    username: 'saraurjc',
    email: 'saraurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-david',
    name: 'David',
    surname: 'Moreno Romero',
    username: 'davidurjc',
    email: 'davidurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-cristina',
    name: 'Cristina',
    surname: 'Hernández Velasco',
    username: 'cristinaurjc',
    email: 'cristinaurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-marcos',
    name: 'Marcos',
    surname: 'Sanz García',
    username: 'marcosurjc',
    email: 'marcosurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-carolina',
    name: 'Carolina',
    surname: 'Cabanillas Peñas',
    username: 'carolinaurjc',
    email: 'carolinaurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-javier',
    name: 'Javier',
    surname: 'Banderas López',
    username: 'juanurjc',
    email: 'juanurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),

  db.users.insert({
    id: 'id-ruben',
    name: 'Rubén',
    surname: 'Núñez Sáez',
    username: 'rubenurjc',
    email: 'rubenurjc@alumnos.urjc.es',
    enabled: true,
    initDate: '2019-06-27T00:00:00.000Z',
    password: '$2b$12$QuKqYtZoSf3lTohVlEUsVeu78pRe7XBG3ZYXcS0DE286gXz9UWoTS',
    groups: ['group-students']
  }),
]
