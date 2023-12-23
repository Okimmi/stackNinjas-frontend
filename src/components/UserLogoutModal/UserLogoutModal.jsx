// import { Link } from 'react-router-dom';
// import { Content, ProfMod } from './Modal.styled';

export const UserLogoutModal = ({ isLogoutActive, onLogoutClose }) => {
  const handleCancelClick = () => {
    // закриття модалки Log out
    onLogoutClose();
  };

  const handleConfirmLogout = () => {
    // код для видалення сесії користувача на бекенді та очищення глобального стейту
    // ...
    // закриття модалки Log out
    onLogoutClose();
    // додаткова логіка для очищення глобального стейту
    // ...
  };

  return (
    isLogoutActive && (
      <div onclick={onLogoutClose}>
        <p>Do you really want to leave?</p>
        <button onClick={handleCancelClick}>Cancel</button>
        <button onClick={handleConfirmLogout}>Log out</button>
      </div>
    )
  );
};
