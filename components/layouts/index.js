import Header from '../header';
import Footer from '../footer'
// import $ from 'jquery';

const LayoutContainer = (props) => {
  return (
    <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
      <Header />
      <div className="px-14">{props.children}</div>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
