const Footer =()=>{

    return(
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
  <div className="col-md-4 d-flex align-items-center">
   
    <span className="mb-3 mb-md-0 text-light">
      © 2023 Bashar Alamoush
    </span>
  </div>
  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
    <li className="ms-3">
      <a className="text-light" href="#">twitter
        <svg className="bi" width={24} height={24}>
          <use xlinkHref="#twitter" />
        </svg>
      </a>
    </li>
    <li className="ms-3">
      <a className="text-light" href="#">instagram
        <svg className="bi" width={24} height={24}>
          <use xlinkHref="#instagram" />
        </svg>
      </a>
    </li>
    <li className="ms-3">
      <a className="text-light" href="#">facebook
        <svg className="bi" width={24} height={24}>
          <use xlinkHref="#facebook" />
        </svg>
      </a>
    </li>
  </ul>
</footer>

    )
}
export default Footer;