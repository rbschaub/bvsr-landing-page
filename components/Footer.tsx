import {Text, Grid, Col} from "@mantine/core"
import Link from "next/link"
import React from "react"
import {Trans, withTranslation, WithTranslation} from "next-i18next"

const Footer = ({t}: WithTranslation) => {

    return (
        <footer>
            <Grid justify={"center"} align={"center"} m={4}>
                <Col md={4} sm={5} xs={12}>
                    <Text>
                        <Trans t={t} i18nKey="contact_us" ns={'footer'}>
                            Contact us per <a href={"mailto:bvsr@lucas-krempel.de"}>mail</a>
                        </Trans>
                    </Text>
                </Col>
                <Col md={4} sm={5} xs={12} offsetMd={4} offsetSm={2}>
                    <Text align={"right"}>
                        <Link href={"https://tudsat.space/impressum/"}>
                            {t('legal_notice', {ns: 'footer'})}
                        </Link>
                    </Text>
                </Col>
            </Grid>
        </footer>
    )
}

export default withTranslation('footer')(Footer)
