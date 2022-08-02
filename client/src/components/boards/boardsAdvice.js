import React from 'react'

import Container from 'react-bootstrap/Container'

const BoardsAdvice = () => {

  return (
    <Container id='advice-page-container'>
      <h1>PICKING YOUR PERFECT BOARD</h1>
      <h2>Its more than just colour schemes</h2>
      <section id='advice'>
        <img id='advice-img' src='../../assets/general/boardFlex.jpeg' alt='girl on flex board photo' />
        <div id='advice-divs'>
          <div className='board-selector advice-animate expand' id='flex'>
            <h2 className='selector-text short-text'>{'<<< Flex >>>'} </h2>
            <h2 className='selector-text long-text'>{'<<< Flex >>>'} </h2>
            <div className='long-text long-text-box' >
              <p>The stiffness of a snowboard has a huge effect on its riding characteristics, and as such all brands will give a flex rating, usually between one and ten.</p>
              <p>Stiffer boards offer increased edge grip and response, particularly at high speeds, and so are favoured by riders looking to charge groomers or big powder lines. Theyre also able to absorb the heaviest of landings without buckling. The downside is that if youre learning to turn, or looking to do low-speed tricks, stiff boards can feel twitchy and plank-like.<br/>
              Carbon rods are commonly used to add stiffness and pop without significantly increasing weight. </p>
              <p>Softer boards make it easy to press rails or load the tail for an ollie, and are easier to manoeuvre at slower speeds. They are also more forgiving of mistakes since rider input is not transferred into the edge quite so rapidly.</p>
            </div>
          </div>

          <div className='board-selector advice-animate expand' id='size'>
            <h2 className='selector-text short-text'>{'<<< Size >>>'} </h2>
            <h2 className='selector-text long-text'>{'<<< Size >>>'} </h2>
            <div className='long-text long-text-box' >
              <p>Head to a rental shop and the standard advice youll be given about choosing the right length snowboard is to “pick something thats somewhere between your nose and your chin”.</p>
              <p>While this is a good starting point, its pretty much the broadest possible guideline. Finding exactly the “right” length board for you depends on two factors - your height and your weight. However its also worth considering what snow conditions youre most likely to encounter, and your terrain and style preferences. </p>
              <p>As a rule of thumb, longer boards are faster and more stable but will be harder to turn - like a Cadillac! whereas a shorter board will be lighter and more maneuverable but will offer less edge grip.</p>
            </div>
          </div>

          <div className='board-selector advice-animate expand' id='rocker'>
            <h2 className='selector-text short-text'>{'<<< Camber vs Rocker >>>'} </h2>
            <h2 className='selector-text long-text'>{'<<< Camber vs Rocker >>>'} </h2>
            <div className='long-text long-text-box' >
              <p>Up until a few years ago, you could put a board down on the snow, look at it sideways and they would all look quite similar. Most board profiles had remained pretty much the same since the late eighties when <b>camber</b> was introduced. Prior to this, the early years of snowboarding were rife with experimentation and all kind of wacky designs.</p>
              <p>Its only in recent seasons that this experimental feel has been revived. In 2007, Lib Tech brought out the Skate Banana and K2 introduced the Gyrator. These reverse camber, or <b>rocker</b>, sticks marked the start of a board shape revolution.</p>
              <a href='https://whitelines.com/snowboard-gear/before-you-buy/camber-rocker-snowboards-differences.html' target='blank' className='link'>Wait. What?</a>
            </div>
          </div>

          <div className='board-selector advice-animate expand' id='shape'>
            <h2 className='selector-text short-text'>{'<<< Shape >>>'} </h2>
            <h2 className='selector-text long-text'>{'<<< Shape >>>'} </h2>
            <div className='long-text long-text-box-bottom' >
              <p>Like surfboards, snowboards come in a variety of shapes depending on the intended conditions.</p>
              <p><b>Directional</b> boards typically have a longer, pointier nose, with a stance set back towards the tail. This makes them better suited to riding forwards. These boards will carve well on the piste and plough easily through powder - since the short tail naturally sinks while the large nose floats over the snow.</p>
              <p><b>True Twin</b> boards are exactly the same at either end. The nose and tail are a mirror image in terms of shape, the default stance is exactly centered, and the flex is the same in both directions. As you might imagine, this means true twin boards ride equally well forwards and backwards, and are perfect for park tricks that require you to take off or land switch.</p>
              <p>A <b>Directional Twin</b> has the same shape at the nose and tail but the default stance is slightly set back and/or the flex is not symmetrical - usually being stiffer in the tail. Such a design is typically found in so-called all mountain snowboards.</p>
            </div>
          </div>

          <div className='board-selector advice-animate expand' id='gender'>
            <h2 className='selector-text short-text'>{'<<< Female vs Unisex >>>'} </h2>
            <h2 className='selector-text long-text'>{'<<< Female vs Unisex >>>'} </h2>
            <div className='long-text long-text-box-bottom' >
              <p>As everyone is probably aware of, in general, women tend to be smaller in height, weigh less, have lower centres of gravity and smaller foot sizes compared to men. As a result, womens snowboards are manufactured differently, with 3 major differences:</p>
              <p><b>Width:</b> womens snowboards tend to be narrower than mens, as theres less need to make room for those gigantic boot sizes<br/>
                <b>Flex:</b> womens snowboards tend to have more flex than mens, whos heavier stature requires a stiffer board<br/>
                <b>Length:</b> womens snowboards tend to be a shorter, again to account for the lighter and shorter stature.</p>
              <p><b>Unisex boards:</b> although most brands still make specific mens and womens boards, things are beginning to change. In their Family Tree range, Burton are making unisex boards. In my opinion this totally makes sense. There is no reason any man/woman of the same height/weight cant ride the same board. Maybe this is the start of things to come…</p>
            </div>
          </div>

        </div>
      </section>

    </Container>


  )
}

export default BoardsAdvice