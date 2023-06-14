// referências  HTML
const nomeInput = document.getElementById('nome')
const sobrenomeInput = document.getElementById('sobrenome')
const loginInput = document.getElementById('login')

// junta o nome e sobrenome
nomeInput.addEventListener('input', gerarLogin)
sobrenomeInput.addEventListener('input', gerarLogin)

// Função para gerar o login
function gerarLogin()
{
  const nome = nomeInput.value.toLowerCase()
  const sobrenome = sobrenomeInput.value.toLowerCase()

  // Remove espaços em branco e caracteres especiais dos nomes
  const nomeFormatado = nome.replace(/\s+/g, '')
  const sobrenomeFormatado = sobrenome.replace(/\s+/g, '')

  // Gera o login com base no nome e sobrenome formatados
  const login = `${nomeFormatado}.${sobrenomeFormatado}`

  // Define o valor do campo "Login"
  loginInput.value = login
}

function limpaFormulario() {
    document.getElementById('endereco').value=("")
    document.getElementById('bairro').value=("")
    document.getElementById('cidade').value=("")
    document.getElementById('estado').value=("")
}
// consultar o cep

    function atualizaFormulario(conteudo) {
    if (!("erro" in conteudo)) {
        let erro = document.getElementById('cep-erro')
        erro.classList.add('d-none');
        document.getElementById('endereco').value=(conteudo.logradouro)
        document.getElementById('bairro').value=(conteudo.bairro)
        document.getElementById('cidade').value=(conteudo.localidade)
        document.getElementById('estado').value=(conteudo.uf)

    }

    else {
        limpaFormulario()
        let erro = document.getElementById('cep-erro')
        erro.classList.remove('d-none')
    }
}

  function validarCep(valor) {
    let cep = valor.replace(/\D/g, '');
    if (cep != "") {
        let validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
            document.getElementById('endereco').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";
            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=atualizaFormulario';
            document.body.appendChild(script);
        }
        else {
            limpaFormulario();
            let erro = document.getElementById('cep-erro');
            erro.classList.remove('d-none');
        }
    }
        else {
        limpaFormulario();
    }
}
 // Obtém os valores dos campos do formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();   
    
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  const cep = document.getElementById('cep').value;
  const endereco = document.getElementById('endereco').value;
  const complemento = document.getElementById('complemento').value;
  const bairro = document.getElementById('bairro').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  const github = document.getElementById('github').value;
  const academia = document.getElementById('academia').value;
  const professor = document.getElementById('professor').value;
  const termos = document.getElementById('termos').checked ? 'Sim' : 'Não';
  const info = document.getElementById('info-sim').checked ? 'Sim' : 'Não';

   // Preenche a tabela com os dados do formulário
document.getElementById('t-nome').textContent = nome;
document.getElementById('t-sobrenome').textContent = sobrenome;
document.getElementById('t-email').textContent = email;
document.getElementById('t-login').textContent = login;
document.getElementById('t-senha').textContent = senha;
document.getElementById('t-cep').textContent = cep;
document.getElementById('t-endereco').textContent = endereco;
document.getElementById('t-complemento').textContent = complemento;
document.getElementById('t-bairro').textContent = bairro;
document.getElementById('t-cidade').textContent = cidade;
document.getElementById('t-estado').textContent = estado;
document.getElementById('t-github').textContent = github;
document.getElementById('t-academia').textContent = academia;
document.getElementById('t-professor').textContent = professor;
document.getElementById('t-termos').textContent = termos;
document.getElementById('t-info').textContent = info;

     document.getElementById('tabela-dados').classList.remove('d-none');
  
    // Limpar o formulário
    this.reset();
  
    // Exibir uma mensagem de sucesso
    alert('As informações foram salvas com sucesso!');
  });