import React from 'react'
import ListContainterWithTitleHeader from './lists/ListContainterWithTitleHeader'
import DropdownExpand from './dropdowns/DropdownExpand'

const FAQReferral = () => {
  return (
    <div className='w-full'>
      <ListContainterWithTitleHeader title='Frequently Asked Questions' imgSrc='/images/faq-image.png'>
        <DropdownExpand title='What is the @PHX-Gamble Refer-a-Friend program?' position='Top'>
          {`Earn BTC by inviting friends to @PHX-Gamble`}
        </DropdownExpand>
        <DropdownExpand title='How can I obtain my referral link?'>
          {`Access your referral link by clicking the "EARN" button in our bot and share it with friends.`}
        </DropdownExpand>
        <DropdownExpand title='Who counts as a valid referral?'>
          <p className='font-semibold'>{`A valid referral is someone who:`}</p>
          <div className='px-1'>
            <p>- {`Uses your referral link`}.</p>
            <p>- {`Is new to @PHX-Gamble with fresh wallets and Telegram accounts.`}</p>
            <p>- {`Connects their Telegram to our bot/PHX.gamble.`}</p>
            <p>- {`Participates in any @PHX-Gamble games.`}</p>
          </div>
        </DropdownExpand>
        <DropdownExpand title='What are my earnings per referral'>
          {`Earn 10% of the house edge from direct referrals, 1% from tier 2 referrals. With an average house edge of 4-5% at @PHX-Gamble, you earn a portion of the profits from your referrals wagers.`}
        </DropdownExpand>
        <DropdownExpand title='What are Tier 2 referrals?'>
          {`You earn 1% from every referral that your direct referrals make.`}
        </DropdownExpand>
        <DropdownExpand title='How are my earnings paid out?'>
          {`Claim your earnings whenever you want from @PHX-Gamble Earn page!`}
        </DropdownExpand>
        <DropdownExpand title='Is there a referral limit?'>
          {`No limit on referrals. Your earnings are based on your referrals gaming activity.`}
        </DropdownExpand>
        <DropdownExpand title='How does house edge work?'>
          {`House edge is the casino's profit margin. For example, a 5% house edge on slots means the casino keeps 5 TON for every 100 TON wagered. And you would receive 10% of that house edge from every referral.`}
        </DropdownExpand>
        <DropdownExpand title='Need more info?' position='Bottom'>
          {`Please see our T&Cs or contact @examplebot.`}
        </DropdownExpand>
      </ListContainterWithTitleHeader>
    </div>
  )
}

export default FAQReferral