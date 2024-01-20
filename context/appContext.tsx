import React, {createContext, useState} from 'react';
import {AppContextInterface, MenuType} from '../types';

// Create Context
export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface,
);

// Menu list
const menuList: MenuType[] = [
  {
    name: 'Africa Donut Mix',
    id: 'Mid01',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    amount: 30,
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Efo Riro',
    id: 'Mid02',
    amount: 30,
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Asaro',
    id: 'Mid03',
    amount: 30,
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Chicken Stew',
    id: 'Mid04',
    amount: 30,
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Moi Moi',
    id: 'Mid05',
    variant: '(Beans Cake)',
    amount: 30,
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    images: [require('../assets/images/donuts.png')],
  },

  {
    name: 'Efo Riro (Yam Mix)',
    variant: '(Yam Porridge)',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    id: 'Mid06',
    amount: 30,
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Asaro (Yam Mix)',
    id: 'Mid07',
    variant: '(Yam Porridge)',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    amount: 30,
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Chicken Stew (Yam Mix)',
    id: 'Mid08',
    amount: 30,
    variant: '(Beans Cake)',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Moi Moi',
    id: 'Mid09',
    amount: 30,
    variant: '(Beans cake)',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    images: [require('../assets/images/donuts.png')],
  },
];

const cartList: MenuType[] = [
  {
    name: 'Africa Donut Mix',
    id: 'Mid01',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    amount: 30,
    variant: '(Yam Porridge)',
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Africa Donut Mix',
    id: 'Mid02',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    amount: 30,
    variant: '(Yam Porridge)',
    images: [require('../assets/images/donuts.png')],
  },
  {
    name: 'Africa Donut',
    variant: '(Yam Porridge)',
    id: 'Mid03',
    details:
      'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..',
    amount: 30,
    images: [require('../assets/images/donuts.png')],
  },
];

// context Provider
export const ContextProvider = ({children}: {children: React.ReactNode}) => {
  const [login, setLogin] = useState<boolean>(false);
  const [menu, setMenu] = useState<MenuType[]>([...menuList]);
  const [carts, setCarts] = useState<MenuType[]>([...cartList]);

  return (
    <AppContext.Provider value={{login, menu, carts}}>
      {children}
    </AppContext.Provider>
  );
};
