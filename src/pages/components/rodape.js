export function Rodape(props){
  return (
    <div>
        <p>&copy; 2024 TechInclusão. Todos os direitos reservados.</p>
      <div class="rodape">
        <a class="social-links" href={props.linkGithub} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="social-links" href={props.linkLinkedin}>LinkedIn</a>
        <a class="social-links" href={props.linkEmail}>Email</a>
      </div>
    </div>
  )
}
