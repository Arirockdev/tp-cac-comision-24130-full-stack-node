let footer = document.querySelector('footer')

let newFooter = document.createElement('div')
newFooter.innerHTML = `<footer class="footer">
        <div class="footer-social-media">
          <p>seguinos</p>
          <div class="footer-social-media-img">
            <ul class="footer-social__menu">
              <li class="footer-social__item">
                <a href="https://es-la.facebook.com/">
                  <img
                    src="../fonts/icons/icons8-facebook-nuevo-color/icons8-facebook-nuevo-48.svg"
                    alt=""
                /></a>
              </li>
              <li class="footer-social__item">
                <a href="https://www.instagram.com/">
                  <img
                    src="../fonts/icons/icons8-instagram-windows-11-color/icons8-instagram-48.svg"
                    alt=""
                /></a>
              </li>
              <li class="footer-social__item">
                <a href="https://www.tiktok.com/es/">
                  <img
                    src="../fonts/icons/icons8-tik-tok-ios-16/icons8-tik-tok-50.svg"
                    alt=""
                /></a>
              </li>
              <li class="footer-social__item">
                
                  <a href="http://">
                    <img src="../fonts/icons/icons8-whatsapp-color/icons8-whatsapp-48.svg" alt="" />
                  </a>
                
              </li>
            </ul>
          </div>
        </div>
      </footer>
` 
footer.appendChild(newFooter)