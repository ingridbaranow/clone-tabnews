function status(request, response) {
  response.status(200).json({ chave: "o status é 200" });
}

export default status;
