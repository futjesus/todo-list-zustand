// import { Board } from './components/Board';
// import { NewItemModal } from './components/NewItemModal';
// import { EditModal } from './components/EditModal';
// import { ConfigModal } from './components/ConfigModal';
// import { Footer } from './components/Footer';

import { Dashboard } from './layouts/dashboard/Dashboard';

// import { useSelector } from 'react-redux';
// import { modals } from './Store/sliceModals';

// import GlobalStyle from './styles/global';

export const App = () => {
  // const { newItemModal, editModal, configModal } = useSelector(modals);

  // return (
  //   <div>
  //     {newItemModal ? (
  //       <NewItemModal />
  //     ) : editModal ? (
  //       <EditModal />
  //     ) : configModal ? (
  //       <ConfigModal />
  //     ) : (
  //       <>
  //         <Board />
  //         <Footer />
  //       </>
  //     )}
  //     <GlobalStyle />
  //   </div>
  // );

  return <Dashboard />;
};
