import React from 'react'

type NotificationType = 'success' | 'error'

interface NotificationProps {
  message: string
  type: NotificationType
  onClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  return (
    <div className={`fixed top-4 right-4 p-4 rounded-md shadow-md ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      <p>{message}</p>
      <button onClick={onClose} className="absolute top-1 right-1 text-white">&times;</button>
    </div>
  )
}