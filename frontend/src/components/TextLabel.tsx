interface TextLabelType {
  classNames: string;
  text: string;
}
export const TextLabel = ({ classNames, text }: TextLabelType) => {
  return (
    <div
      className={
        "dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 " + classNames
      }
    >
      {text}
    </div>
  );
};
