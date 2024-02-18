interface Props {
  currentStep: number;
  changeStep: (step: number) => void;
}

export function Header({ currentStep, changeStep }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          color: currentStep === 1 ? "#e34954" : "black",
        }}
        onClick={() => changeStep(1)}
      >
        {" "}
        <span style={styles.step}>1</span> Produtos
      </div>
      <div
        style={{
          cursor: "pointer",
          color: currentStep === 2 ? "#e34954" : "black",
        }}
        onClick={() => changeStep(2)}
      >
        <span style={styles.step}>2</span>
        Dados do cliente
      </div>
      <div
        style={{
          cursor: "pointer",
          color: currentStep === 3 ? "#e34954" : "black",
        }}
        onClick={() => changeStep(3)}
      >
        <span style={styles.step}>3</span>
        Pagamento
      </div>
    </div>
  );
}

const styles = {
  step: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e34954",
    backgroundColor: "#fde8e9",
    padding: "5px 10px",
    borderRadius: 50,
    marginRight: 10,
  },
};
