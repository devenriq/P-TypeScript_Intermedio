import {User, ROLES} from './01-enum'

const currentUser: User ={
  username: 'Enrique',
  role: ROLES.CUSTOMER,
}

export const checkAdminRole = ()=>{
  if(currentUser.role === ROLES.ADMIN){
    return true
  } else {
    return false
  }
}

console.log(checkAdminRole())

export const checkRole = (roles: string[])=>{
  if(roles.includes(currentUser.role)){
    return true
  } else {
    return false
  }
}

const rta2 = checkRole([ROLES.ADMIN, ROLES.SELLER])
console.log(rta2)

export const checkRoleV2 = (...roles: string[])=>{
  if(roles.includes(currentUser.role)){
    return true
  } else {
    return false
  }
}

const rta3 = checkRoleV2(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log(rta3)
