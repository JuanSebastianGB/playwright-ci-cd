'use client';

export const Button = ({
  onClick,
  content,
}: {
  onClick?: () => void;
  content: string;
}) => {
  return (
    <>
      My button
      <button onClick={onClick}>{content}</button>
    </>
  );
};
