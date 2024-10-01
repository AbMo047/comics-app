import React from 'react';
import styles from './Welcome.module.css';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Welcome to Marvel Comics App</h2>
        <p>Here are the first steps to get started:</p>
        <ul>
          <li>1. Choose a comic you like.</li>
          <li>2. Add a personal message and customize the background.</li>
          <li>3. Add the comic to your favorites.</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
