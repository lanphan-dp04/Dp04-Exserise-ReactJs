import "../component/MainWeare.scss"
import MeetTeam from "./meetTeam/MeetTeam";
import United from "./stUnited/United";

function MainWeare() {
  return (
    <section className='container'>
      {/* row one */}
      <div className='vc-row'>
        <div className='vc_column-inner'>
            <div className='wpb_wrapper'>
              <div className='wpb_text_column'>
                <div className='wpb_wrapper-chil'>
                  <p>Established on the early of 2016 and known as STD Software serves diverse global clients (Japanese, Australian, US) by offering mainstream services: IT outsourcing, software & website development, mobile applications.</p>
                  <p>In 2019, STD Software was  acquired to become ST Software division in ST United beside other divisions: ST Digital and ST Incubator.</p>
                  <p><strong>Our vision</strong>: Be the premier enterprise solutions provider and software product innovator in the Asia Pacific region</p>
                  <p><strong>Our mission:</strong></p>
                  <ul>
                    <li>To empower our business partners to gain competitive advantage by providing innovative solutions.</li>
                    <li>To continuously enhance our expertise in cutting-edge technologies and processes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* row two */}
      <div className='vc-row'>
        <div className='vc_column-inner'>
          <div className='vc_col_1'>
            <hr></hr>
          </div>
        </div>
      </div>
      {/* row three */}
      <div className='vc-row'>
        <div className='vc_column-inner'>
            <h1>WE ARE ST UNITED</h1>
        </div>
      </div>
      {/* row four */}
      <United/>
      {/* row five */}
      <div className='vc-row'>
        <div className='vc_column-inner'>
            <h1>Meet Our Team</h1>
        </div>
      </div>
      {/* row six */}
      <MeetTeam/>
      {/* row seven */}
      <div className='vc-row'>
        <div className='vc_column-inner'>
          <div className='vc_btn3-container'>
            <a className="vc_btn3-size-md" href='https://stunited.vn/'>Wanna join us?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainWeare;