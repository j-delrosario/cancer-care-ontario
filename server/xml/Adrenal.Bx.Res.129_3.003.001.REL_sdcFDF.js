﻿module.exports = () => {
    return `<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/xsl" href="sdctemplate.xslt"?>
<FormDesign xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ID="Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF" baseURI="www.cap.org/eCC" fullURI="_baseURI=www.cap.org/eCC&amp;_lineage=Adrenal.Bx.Res.129&amp;_version=3.003.001.REL&amp;_docType=sdcFDF" formTitle="ADRENAL GLAND" lineage="Adrenal.Bx.Res.129" filename="Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF.xml" version="3.003.001.REL" xmlns="urn:ihe:qrph:sdc:2016">
 <Property name="Copyright" type="CAPeCC_static_text" styleClass="copyright" order="1" propName="Copyright" val="(c) 2019 College of American Pathologists.  All rights reserved.  License required for use." />
 <Property name="GenericHeaderText" type="CAPeCC_static_text" order="2" propName="GenericHeaderText" val="Surgical Pathology Cancer Case Summary" />
 <Property name="Category" type="CAPeCC_meta" order="3" propName="Category" val="Endocrine" />
 <Property name="OfficialName" type="CAPeCC_meta" order="4" propName="OfficialName" val="ADRENAL GLAND" />
 <Property name="CAP_ProtocolName" type="CAPeCC_meta" order="5" propName="CAP_ProtocolName" val="Adrenal Gland" />
 <Property name="CAP_ProtocolShortName" type="CAPeCC_meta" order="6" propName="CAP_ProtocolShortName" val="Adrenal" />
 <Property name="CAP_ProtocolVersion" type="CAPeCC_meta" order="7" propName="CAP_ProtocolVersion" val="4.0.2.0" />
 <Property name="TemplateID" type="CAPeCC_meta" order="8" propName="TemplateID" val="129.100004300" />
 <Property name="Restrictions" type="CAPeCC_meta" order="9" propName="Restrictions" val="Please refer to the cancer protocol cover page (www.cap.org/cancerprotocols) for information about which tumor types and procedures can be reported using this template." />
 <Property name="CAP_Required" type="CAPeCC_meta" order="10" propName="CAP_Required" val="true" />
 <Property name="AccreditationDate" type="CAPeCC_meta dt.dateTime" order="11" propName="AccreditationDate" val="11/1/2019" />
 <Property name="WebPostingDate" type="CAPeCC_meta dt.dateTime" order="12" propName="WebPostingDate" val="2/27/2019" />
 <Property name="ApprovalStatus" type="CAPeCC_meta" order="13" propName="ReleaseStatus" val="REL" />
 <Property name="AJCC_Version" type="CAPeCC_meta" order="14" propName="AJCC_Version" val="8th Edition" />
 <Body name="Body" order="15" ID="Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF_Body">
  <ChildItems name="ch_Body" order="16">
   <DisplayedItem name="DI_39617" order="17" ID="39617.100004300" title="# This checklist applies principally to adrenal carcinomas in adults. Pediatric adrenal cortical tumors have different criteria for malignancy and are, in general, treated under protocols that may differ significantly from the recommendations for adult- type tumors.">
    <Property name="p_rptTxt_39617_1" order="18" propName="reportText" val="{no text}" />
   </DisplayedItem>
   <Section name="S_4257" order="19" ID="4257.100004300" minCard="0">
    <ChildItems name="ch_4257_1" order="20">
     <Question name="Q_2118" order="21" ID="2118.100004300" minCard="0" readOnly="true">
      <Property name="p_altTxt_2118_1" order="22" propName="altText" val="Tumor Site" />
      <ListField name="lf_2118_2" order="23">
       <List name="lst_2118_3" order="24">
        <ListItem name="LI_2119" order="25" ID="2119.100004300" title="Adrenal gland" selected="true">
         <Property name="p_rptTxt_2119_1" order="26" propName="reportText" val="{no text}" />
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_17537" order="27" ID="17537.100004300" title="CLINICAL" mustImplement="false" minCard="0">
    <ChildItems name="ch_17537_1" order="28">
     <Question name="Q_4156" order="29" ID="4156.100004300" title="Clinical History (specify)" mustImplement="false" minCard="0">
      <Property name="p_rptTxt_4156_1" order="30" propName="reportText" val="Clinical History" />
      <ResponseField name="rf_4156_2" order="31">
       <Response name="rsp_4156_3" order="32">
        <string name="str_4156_4" order="33" />
       </Response>
      </ResponseField>
     </Question>
     <Question name="Q_53772" order="34" ID="53772.100004300" title="Functional Status (Notes J and K)" mustImplement="false" minCard="0">
      <Property name="p_rptTxt_53772_1" order="35" propName="reportText" val="Functional Status" />
      <ListField name="lf_53772_2" order="36" maxSelections="0">
       <List name="lst_53772_3" order="37">
        <ListItem name="LI_20900" order="38" ID="20900.100004300" title="Urinary 17-ketosteroids increased (10 mg / g creatinine / 24 hours)" />
        <ListItem name="LI_20902" order="39" ID="20902.100004300" title="Cushing syndrome" />
        <ListItem name="LI_20904" order="40" ID="20904.100004300" title="Conn syndrome" />
        <ListItem name="LI_43052" order="41" ID="43052.100004300" title="Virilization" />
        <ListItem name="LI_44618" order="42" ID="44618.100004300" title="Feminization" />
        <ListItem name="LI_20906" order="43" ID="20906.100004300" title="Weight loss" />
        <ListItem name="LI_20907" order="44" ID="20907.100004300" title="Other (specify)">
         <Property name="p_rptTxt_20907_1" order="45" propName="reportText" val="{no text}" />
         <ListItemResponseField name="lirf_20907_2" order="46" responseRequired="true">
          <Response name="rsp_20907_3" order="47">
           <string name="str_20907_4" order="48" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_17875" order="49" ID="17875.100004300" title="SPECIMEN">
    <ChildItems name="ch_17875_1" order="50">
     <Question name="Q_42554" order="51" ID="42554.100004300" title="Procedure">
      <ListField name="lf_42554_1" order="52">
       <List name="lst_42554_2" order="53">
        <ListItem name="LI_50809" order="54" ID="50809.100004300" title="Percutaneous needle biopsy" />
        <ListItem name="LI_46633" order="55" ID="46633.100004300" title="Endoscopic directed biopsy (specify radiographic technique)">
         <Property name="p_rptTxt_46633_1" order="56" propName="reportText" val="Endoscopic directed biopsy" />
         <ListItemResponseField name="lirf_46633_2" order="57" responseRequired="true">
          <Response name="rsp_46633_3" order="58">
           <string name="str_46633_4" order="59" />
          </Response>
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_2122" order="60" ID="2122.100004300" title="Adrenalectomy, total" />
        <ListItem name="LI_2121" order="61" ID="2121.100004300" title="Adrenalectomy, partial" />
        <ListItem name="LI_2123" order="62" ID="2123.100004300" title="Other (specify)">
         <Property name="p_rptTxt_2123_1" order="63" propName="reportText" val="{no text}" />
         <ListItemResponseField name="lirf_2123_2" order="64" responseRequired="true">
          <Response name="rsp_2123_3" order="65">
           <string name="str_2123_4" order="66" />
          </Response>
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_2124" order="67" ID="2124.100004300" title="Not specified" />
       </List>
      </ListField>
     </Question>
     <Question name="Q_52756" order="68" ID="52756.100004300" title="Specimen Laterality">
      <ListField name="lf_52756_1" order="69">
       <List name="lst_52756_2" order="70">
        <ListItem name="LI_2126" order="71" ID="2126.100004300" title="Right" />
        <ListItem name="LI_2127" order="72" ID="2127.100004300" title="Left" />
        <ListItem name="LI_56812" order="73" ID="56812.100004300" title="Bilateral" />
        <ListItem name="LI_2128" order="74" ID="2128.100004300" title="Not specified" />
        <ListItem name="LI_20866" order="75" ID="20866.100004300" title="Other (specify)">
         <Property name="p_rptTxt_20866_1" order="76" propName="reportText" val="{no text}" />
         <ListItemResponseField name="lirf_20866_2" order="77" responseRequired="true">
          <Response name="rsp_20866_3" order="78">
           <string name="str_20866_4" order="79" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_17876" order="80" ID="17876.100004300" title="TUMOR">
    <ChildItems name="ch_17876_1" order="81">
     <Question name="Q_59852" order="82" ID="59852.100004300" title="Histologic Type (Notes C through E)">
      <Property name="p_rptTxt_59852_1" order="83" propName="reportText" val="Histologic Type" />
      <ListField name="lf_59852_2" order="84">
       <List name="lst_59852_3" order="85">
        <ListItem name="LI_2117" order="86" ID="2117.100004300" title="Adrenal cortical carcinoma" />
        <ListItem name="LI_46925" order="87" ID="46925.100004300" title="Adrenal cortical carcinoma, oncocytic type" />
        <ListItem name="LI_44449" order="88" ID="44449.100004300" title="Adrenal cortical carcinoma, myxoid type" />
        <ListItem name="LI_59162" order="89" ID="59162.100004300" title="Adrenal cortical carcinoma, sarcomatoid type" />
       </List>
      </ListField>
      <ChildItems name="ch_59852_1" order="90">
       <Question name="Q_43670" order="91" ID="43670.100004300" title="Histologic Type Comments" mustImplement="false" minCard="0">
        <ResponseField name="rf_43670_1" order="92">
         <Response name="rsp_43670_2" order="93">
          <string name="str_43670_3" order="94" />
         </Response>
        </ResponseField>
       </Question>
      </ChildItems>
     </Question>
     <Question name="Q_49275" order="95" ID="49275.100004300" title="Histologic Grade (Notes C through E)">
      <Property name="p_rptTxt_49275_1" order="96" propName="reportText" val="Histologic Grade" />
      <ListField name="lf_49275_2" order="97">
       <List name="lst_49275_3" order="98">
        <ListItem name="LI_53603" order="99" ID="53603.100004300" title="Low grade (&lt;= 20 mitoses / 50 high-power fields)">
         <Property name="p_rptTxt_53603_1" order="100" propName="reportText" val="Low grade" />
        </ListItem>
        <ListItem name="LI_48634" order="101" ID="48634.100004300" title="High grade (&gt; 20 mitoses / 50 high-power fields)">
         <Property name="p_rptTxt_48634_1" order="102" propName="reportText" val="High grade" />
        </ListItem>
        <DisplayedItem name="DI_57980" order="103" ID="57980.100004300" title="# Note: Generally due to core needle biopsy, with insufficient viable tumor to count 50 HPFs.">
         <Property name="p_rptTxt_57980_1" order="104" propName="reportText" val="{no text}" />
        </DisplayedItem>
        <ListItem name="LI_54648" order="105" ID="54648.100004300" title="Cannot be assessed (explain)#">
         <Property name="p_rptTxt_54648_1" order="106" propName="reportText" val="Cannot be assessed" />
         <ListItemResponseField name="lirf_54648_2" order="107" responseRequired="true">
          <Response name="rsp_54648_3" order="108">
           <string name="str_54648_4" order="109" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
     <Question name="Q_2129" order="110" ID="2129.100004300" title="Tumor Size (Note A)">
      <Property name="p_rptTxt_2129_1" order="111" propName="reportText" val="Tumor Size" />
      <ListField name="lf_2129_2" order="112">
       <List name="lst_2129_3" order="113">
        <ListItem name="LI_2131" order="114" ID="2131.100004300" title="Greatest dimension in Centimeters (cm)">
         <Property name="p_rptTxt_2131_1" order="115" propName="reportText" val="Greatest Dimension (Centimeters)" />
         <ListItemResponseField name="lirf_2131_2" order="116" responseRequired="true">
          <Response name="rsp_2131_3" order="117">
           <decimal name="dec_2131_4" order="118" />
          </Response>
          <TextAfterResponse name="rtt_2131_5" order="119" val="cm" />
          <ResponseUnits name="un_2131_6" order="120" val="cm" unitSystem="UCOM" />
         </ListItemResponseField>
         <ChildItems name="ch_2131_7" order="121">
          <Question name="Q_2133" order="122" ID="2133.100004300" title="Additional Dimension in Centimeters (cm)" mustImplement="false" minCard="0">
           <Property name="p_rptTxt_2133_1" order="123" propName="reportText" val="Additional Dimension (Centimeters)" />
           <ResponseField name="rf_2133_2" order="124">
            <Response name="rsp_2133_3" order="125">
             <decimal name="dec_2133_4" order="126" />
            </Response>
            <TextAfterResponse name="rtt_2133_5" order="127" val="cm" />
            <ResponseUnits name="un_2133_6" order="128" val="cm" unitSystem="UCOM" />
           </ResponseField>
          </Question>
          <Question name="Q_2132" order="129" ID="2132.100004300" title="Additional Dimension in Centimeters (cm)" mustImplement="false" minCard="0">
           <Property name="p_rptTxt_2132_1" order="130" propName="reportText" val="Additional Dimension (Centimeters)" />
           <ResponseField name="rf_2132_2" order="131">
            <Response name="rsp_2132_3" order="132">
             <decimal name="dec_2132_4" order="133" />
            </Response>
            <TextAfterResponse name="rtt_2132_5" order="134" val="cm" />
            <ResponseUnits name="un_2132_6" order="135" val="cm" unitSystem="UCOM" />
           </ResponseField>
          </Question>
         </ChildItems>
        </ListItem>
        <ListItem name="LI_2130" order="136" ID="2130.100004300" title="Cannot be determined (explain)">
         <Property name="p_rptTxt_2130_1" order="137" propName="reportText" val="Cannot be determined" />
         <ListItemResponseField name="lirf_2130_2" order="138" responseRequired="true">
          <Response name="rsp_2130_3" order="139">
           <string name="str_2130_4" order="140" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
     <Question name="Q_40496" order="141" ID="40496.100004300" title="Tumor Weight (Note B)">
      <Property name="p_rptTxt_40496_1" order="142" propName="reportText" val="Tumor Weight" />
      <ListField name="lf_40496_2" order="143">
       <List name="lst_40496_3" order="144">
        <ListItem name="LI_44761" order="145" ID="44761.100004300" title="Specify weight (g)">
         <Property name="p_rptTxt_44761_1" order="146" propName="reportText" val="{no text}" />
         <ListItemResponseField name="lirf_44761_2" order="147" responseRequired="true">
          <Response name="rsp_44761_3" order="148">
           <decimal name="dec_44761_4" order="149" />
          </Response>
          <TextAfterResponse name="rtt_44761_5" order="150" val="g" />
          <ResponseUnits name="un_44761_6" order="151" val="grams" unitSystem="UCOM" />
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_57476" order="152" ID="57476.100004300" title="Cannot be determined">
         <ListItemResponseField name="lirf_57476_1" order="153">
          <Response name="rsp_57476_2" order="154">
           <string name="str_57476_3" order="155" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
     <Question name="Q_51265" order="156" ID="51265.100004300" title="Tumor Extension">
      <ListField name="lf_51265_1" order="157" maxSelections="0">
       <List name="lst_51265_2" order="158">
        <ListItem name="LI_44186" order="159" ID="44186.100004300" title="No evidence of primary tumor" selectionDeselectsSiblings="true" />
        <ListItem name="LI_50695" order="160" ID="50695.100004300" title="Tumor confined to adrenal cortex without invasion through tumor capsule (if present)" selectionDeselectsSiblings="true">
         <Property name="p_rptTxt_50695_1" order="161" propName="reportText" val="Tumor confined to adrenal cortex without invasion through tumor capsule" />
        </ListItem>
        <ListItem name="LI_39537" order="162" ID="39537.100004300" title="Tumor invades into or through the adrenal capsule" />
        <ListItem name="LI_52315" order="163" ID="52315.100004300" title="Tumor invades into extra-adrenal structures (specify)">
         <Property name="p_rptTxt_52315_1" order="164" propName="reportText" val="Tumor invades into extra-adrenal structures" />
         <ListItemResponseField name="lirf_52315_2" order="165" responseRequired="true">
          <Response name="rsp_52315_3" order="166">
           <string name="str_52315_4" order="167" />
          </Response>
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_56271" order="168" ID="56271.100004300" title="Tumor invades into other adjacent organ(s)">
         <ChildItems name="ch_56271_1" order="169">
          <Question name="Q_53526" order="170" ID="53526.100004300">
           <Property name="p_altTxt_53526_1" order="171" propName="altText" val="Specify Adjacent Organ(s)" />
           <ListField name="lf_53526_2" order="172" maxSelections="0">
            <List name="lst_53526_3" order="173">
             <ListItem name="LI_56752" order="174" ID="56752.100004300" title="Kidney" />
             <ListItem name="LI_57748" order="175" ID="57748.100004300" title="Pancreas" />
             <ListItem name="LI_41409" order="176" ID="41409.100004300" title="Liver" />
             <ListItem name="LI_42305" order="177" ID="42305.100004300" title="Spleen" />
             <ListItem name="LI_58229" order="178" ID="58229.100004300" title="Diaphragm" />
             <ListItem name="LI_46218" order="179" ID="46218.100004300" title="Stomach" />
             <ListItem name="LI_45594" order="180" ID="45594.100004300" title="Other (specify)">
              <Property name="p_rptTxt_45594_1" order="181" propName="reportText" val="{no text}" />
              <ListItemResponseField name="lirf_45594_2" order="182" responseRequired="true">
               <Response name="rsp_45594_3" order="183">
                <string name="str_45594_4" order="184" />
               </Response>
              </ListItemResponseField>
             </ListItem>
            </List>
           </ListField>
          </Question>
         </ChildItems>
        </ListItem>
        <ListItem name="LI_51911" order="185" ID="51911.100004300" title="Cannot be assessed" selectionDeselectsSiblings="true">
         <ListItemResponseField name="lirf_51911_1" order="186">
          <Response name="rsp_51911_2" order="187">
           <string name="str_51911_3" order="188" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
     <Question name="Q_39990" order="189" ID="39990.100004300" title="Lymphovascular Invasion (Note F)">
      <Property name="p_rptTxt_39990_1" order="190" propName="reportText" val="Lymphovascular Invasion" />
      <ListField name="lf_39990_2" order="191" maxSelections="0">
       <List name="lst_39990_3" order="192">
        <ListItem name="LI_2159" order="193" ID="2159.100004300" title="Not identified" selectionDeselectsSiblings="true" />
        <ListItem name="LI_52962" order="194" ID="52962.100004300" title="Large vessel invasion, renal vein (including when identified clinically)">
         <Property name="p_rptTxt_52962_1" order="195" propName="reportText" val="Large vessel invasion, renal vein" />
        </ListItem>
        <ListItem name="LI_59454" order="196" ID="59454.100004300" title="Large vessel invasion, vena cava (including when identified clinically)">
         <Property name="p_rptTxt_59454_1" order="197" propName="reportText" val="Large vessel invasion, vena cava" />
        </ListItem>
        <ListItem name="LI_43597" order="198" ID="43597.100004300" title="Large vessel invasion, not otherwise specified" />
        <ListItem name="LI_55828" order="199" ID="55828.100004300" title="Microscopic angioinvasion" />
        <ListItem name="LI_45031" order="200" ID="45031.100004300" title="Lymphatic invasion" />
        <ListItem name="LI_2161" order="201" ID="2161.100004300" title="Cannot be determined" selectionDeselectsSiblings="true">
         <ListItemResponseField name="lirf_2161_1" order="202">
          <Response name="rsp_2161_2" order="203">
           <string name="str_2161_3" order="204" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
     <Question name="Q_48491" order="205" ID="48491.100004300" title="Tumor Description" mustImplement="false" minCard="0">
      <ListField name="lf_48491_1" order="206" maxSelections="0">
       <List name="lst_48491_2" order="207">
        <ListItem name="LI_20863" order="208" ID="20863.100004300" title="Hemorrhagic" />
        <ListItem name="LI_20864" order="209" ID="20864.100004300" title="Necrotic" />
        <ListItem name="LI_20865" order="210" ID="20865.100004300" title="Other (specify)">
         <Property name="p_rptTxt_20865_1" order="211" propName="reportText" val="{no text}" />
         <ListItemResponseField name="lirf_20865_2" order="212" responseRequired="true">
          <Response name="rsp_20865_3" order="213">
           <string name="str_20865_4" order="214" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_17878" order="215" ID="17878.100004300" title="MARGINS">
    <ChildItems name="ch_17878_1" order="216">
     <Question name="Q_2153" order="217" ID="2153.100004300" title="Margins">
      <ListField name="lf_2153_1" order="218">
       <List name="lst_2153_2" order="219">
        <ListItem name="LI_2154" order="220" ID="2154.100004300" title="Uninvolved by tumor">
         <ChildItems name="ch_2154_1" order="221">
          <Question name="Q_26358" order="222" ID="26358.100004300" title="Distance from Closest Margin in Millimeters (mm)" mustImplement="false" minCard="0">
           <Property name="p_rptTxt_26358_1" order="223" propName="reportText" val="Distance from Closest Margin (Millimeters)" />
           <ListField name="lf_26358_2" order="224">
            <List name="lst_26358_3" order="225">
             <ListItem name="LI_26359" order="226" ID="26359.100004300" title="Specify in Millimeters (mm)">
              <Property name="p_rptTxt_26359_1" order="227" propName="reportText" val="{no text}" />
              <ListItemResponseField name="lirf_26359_2" order="228" responseRequired="true">
               <Response name="rsp_26359_3" order="229">
                <decimal name="dec_26359_4" order="230" />
               </Response>
               <TextAfterResponse name="rtt_26359_5" order="231" val="mm" />
               <ResponseUnits name="un_26359_6" order="232" val="mm" unitSystem="UCOM" />
              </ListItemResponseField>
             </ListItem>
             <ListItem name="LI_26361" order="233" ID="26361.100004300" title="Cannot be determined (explain)">
              <Property name="p_rptTxt_26361_1" order="234" propName="reportText" val="Cannot be determined" />
              <ListItemResponseField name="lirf_26361_2" order="235" responseRequired="true">
               <Response name="rsp_26361_3" order="236">
                <string name="str_26361_4" order="237" />
               </Response>
              </ListItemResponseField>
             </ListItem>
            </List>
           </ListField>
          </Question>
          <Question name="Q_51863" order="238" ID="51863.100004300" title="?Specify Margin, if possible" minCard="0">
           <Property name="p_rptTxt_51863_1" order="239" propName="reportText" val="Margin" />
           <ResponseField name="rf_51863_2" order="240">
            <Response name="rsp_51863_3" order="241">
             <string name="str_51863_4" order="242" />
            </Response>
           </ResponseField>
          </Question>
         </ChildItems>
        </ListItem>
        <ListItem name="LI_2155" order="243" ID="2155.100004300" title="Involved by tumor">
         <ChildItems name="ch_2155_1" order="244">
          <Question name="Q_53074" order="245" ID="53074.100004300" title="?Specify Margin(s), if possible" minCard="0">
           <Property name="p_rptTxt_53074_1" order="246" propName="reportText" val="Margin(s)" />
           <ResponseField name="rf_53074_2" order="247">
            <Response name="rsp_53074_3" order="248">
             <string name="str_53074_4" order="249" />
            </Response>
           </ResponseField>
          </Question>
         </ChildItems>
        </ListItem>
        <ListItem name="LI_2157" order="250" ID="2157.100004300" title="Cannot be assessed">
         <ListItemResponseField name="lirf_2157_1" order="251">
          <Response name="rsp_2157_2" order="252">
           <string name="str_2157_3" order="253" />
          </Response>
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_20852" order="254" ID="20852.100004300" title="Not applicable">
         <ListItemResponseField name="lirf_20852_1" order="255">
          <Response name="rsp_20852_2" order="256">
           <string name="str_20852_3" order="257" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_17881" order="258" ID="17881.100004300" title="LYMPH NODES">
    <ChildItems name="ch_17881_1" order="259">
     <Question name="Q_1867" order="260" ID="1867.100004300" title="Regional Lymph Nodes">
      <ListField name="lf_1867_1" order="261" maxSelections="0">
       <List name="lst_1867_2" order="262">
        <ListItem name="LI_1868" order="263" ID="1868.100004300" title="No lymph nodes submitted or found" selectionDisablesChildren="true">
         <ChildItems name="ch_1868_1" order="264">
          <Question name="Q_45098" order="265" ID="45098.100004300" title="Number of Lymph Nodes Involved">
           <ListField name="lf_45098_1" order="266">
            <List name="lst_45098_2" order="267">
             <ListItem name="LI_1873" order="268" ID="1873.100004300" title="Specify number">
              <Property name="p_rptTxt_1873_1" order="269" propName="reportText" val="{no text}" />
              <ListItemResponseField name="lirf_1873_2" order="270" responseRequired="true">
               <Response name="rsp_1873_3" order="271">
                <integer name="intr_1873_4" order="272" maxInclusive="100" minInclusive="0" />
               </Response>
              </ListItemResponseField>
             </ListItem>
             <ListItem name="LI_58938" order="273" ID="58938.100004300" title="At least">
              <ListItemResponseField name="lirf_58938_1" order="274" responseRequired="true">
               <Response name="rsp_58938_2" order="275">
                <integer name="intr_58938_3" order="276" maxInclusive="100" minInclusive="1" />
               </Response>
              </ListItemResponseField>
             </ListItem>
             <ListItem name="LI_1874" order="277" ID="1874.100004300" title="Number cannot be determined (explain)">
              <Property name="p_rptTxt_1874_1" order="278" propName="reportText" val="Number cannot be determined" />
              <ListItemResponseField name="lirf_1874_2" order="279" responseRequired="true">
               <Response name="rsp_1874_3" order="280">
                <string name="str_1874_4" order="281" />
               </Response>
              </ListItemResponseField>
             </ListItem>
            </List>
           </ListField>
           <ChildItems name="ch_45098_5" order="282">
            <Question name="Q_39296" order="283" ID="39296.100004300" title="Extranodal Extension" mustImplement="false" minCard="0">
             <ListField name="lf_39296_1" order="284">
              <List name="lst_39296_2" order="285">
               <ListItem name="LI_20886" order="286" ID="20886.100004300" title="Not identified" />
               <ListItem name="LI_20887" order="287" ID="20887.100004300" title="Present" />
               <ListItem name="LI_20888" order="288" ID="20888.100004300" title="Cannot be determined">
                <ListItemResponseField name="lirf_20888_1" order="289">
                 <Response name="rsp_20888_2" order="290">
                  <string name="str_20888_3" order="291" />
                 </Response>
                </ListItemResponseField>
               </ListItem>
              </List>
             </ListField>
            </Question>
           </ChildItems>
          </Question>
          <Question name="Q_42934" order="292" ID="42934.100004300" title="Number of Lymph Nodes Examined">
           <ListField name="lf_42934_1" order="293">
            <List name="lst_42934_2" order="294">
             <ListItem name="LI_1870" order="295" ID="1870.100004300" title="Specify number">
              <Property name="p_rptTxt_1870_1" order="296" propName="reportText" val="{no text}" />
              <ListItemResponseField name="lirf_1870_2" order="297" responseRequired="true">
               <Response name="rsp_1870_3" order="298">
                <integer name="intr_1870_4" order="299" maxInclusive="100" minInclusive="1" />
               </Response>
              </ListItemResponseField>
             </ListItem>
             <ListItem name="LI_54610" order="300" ID="54610.100004300" title="At least">
              <ListItemResponseField name="lirf_54610_1" order="301" responseRequired="true">
               <Response name="rsp_54610_2" order="302">
                <integer name="intr_54610_3" order="303" maxInclusive="100" minInclusive="1" />
               </Response>
              </ListItemResponseField>
             </ListItem>
             <ListItem name="LI_1871" order="304" ID="1871.100004300" title="Number cannot be determined (explain)">
              <Property name="p_rptTxt_1871_1" order="305" propName="reportText" val="Number cannot be determined" />
              <ListItemResponseField name="lirf_1871_2" order="306" responseRequired="true">
               <Response name="rsp_1871_3" order="307">
                <string name="str_1871_4" order="308" />
               </Response>
              </ListItemResponseField>
             </ListItem>
            </List>
           </ListField>
          </Question>
         </ChildItems>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_2136" order="309" ID="2136.100004300" title="PATHOLOGIC STAGE CLASSIFICATION  (pTNM, AJCC 8th Edition) (Note G)">
    <Property name="p_rptTxt_2136_1" order="310" propName="reportText" val="PATHOLOGIC STAGE CLASSIFICATION  (pTNM, AJCC 8th Edition)" />
    <ChildItems name="ch_2136_2" order="311">
     <DisplayedItem name="DI_51087" order="312" ID="51087.100004300" title="Note: Reporting of pT, pN, and (when applicable) pM categories is based on information available to the pathologist at the time the report is issued.  As per the AJCC (Chapter 1, 8th Ed.) it is the managing physician’s responsibility to establish the final pathologic stage based upon all pertinent information, including but potentially not limited to this pathology report.">
      <Property name="p_rptTxt_51087_1" order="313" propName="reportText" val="Note: Reporting of pT, pN, and (when applicable) pM categories is based on information available to the pathologist at the time the report is issued.  As per the AJCC (Chapter 1, 8th Ed.) it is the managing physician’s responsibility to establish the final pathologic stage based upon all pertinent information, including but potentially not limited to this pathology report." />
     </DisplayedItem>
     <Question name="Q_20880" order="314" ID="20880.100004300" title="?TNM Descriptors">
      <Property name="p_rptTxt_20880_1" order="315" propName="reportText" val="TNM Descriptors" />
      <ListField name="lf_20880_2" order="316" maxSelections="0">
       <List name="lst_20880_3" order="317">
        <ListItem name="LI_22897" order="318" ID="22897.100004300" title="?Not applicable" selectionDeselectsSiblings="true" omitWhenSelected="true">
         <Property name="p_rptTxt_22897_1" order="319" propName="reportText" val="Not applicable" />
         <ListItemResponseField name="lirf_22897_2" order="320">
          <Response name="rsp_22897_3" order="321">
           <string name="str_22897_4" order="322" />
          </Response>
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_20890" order="323" ID="20890.100004300" title="m (multiple primary tumors)" />
        <ListItem name="LI_20891" order="324" ID="20891.100004300" title="r (recurrent)" />
        <ListItem name="LI_20892" order="325" ID="20892.100004300" title="y (post-treatment)" />
       </List>
      </ListField>
     </Question>
     <Question name="Q_2137" order="326" ID="2137.100004300" title="Primary Tumor (pT)">
      <ListField name="lf_2137_1" order="327">
       <List name="lst_2137_2" order="328">
        <DisplayedItem name="DI_20894" order="329" ID="20894.100004300" title="Note: There is no category of carcinoma in situ (pTis) relative to carcinomas of the adrenal gland.">
         <Property name="p_rptTxt_20894_1" order="330" propName="reportText" val="{no text}" />
        </DisplayedItem>
        <ListItem name="LI_2142" order="331" ID="2142.100004300" title="pTX: Primary tumor cannot be assessed">
         <Property name="p_rptTxt_2142_1" order="332" propName="reportText" val="pTX" />
        </ListItem>
        <ListItem name="LI_20889" order="333" ID="20889.100004300" title="pT0: No evidence of primary tumor">
         <Property name="p_rptTxt_20889_1" order="334" propName="reportText" val="pT0" />
        </ListItem>
        <ListItem name="LI_2138" order="335" ID="2138.100004300" title="pT1: Tumor &lt;= 5 cm in greatest dimension, no extra-adrenal invasion">
         <Property name="p_rptTxt_2138_1" order="336" propName="reportText" val="pT1" />
        </ListItem>
        <ListItem name="LI_2139" order="337" ID="2139.100004300" title="pT2: Tumor &gt; 5 cm, no extra-adrenal invasion">
         <Property name="p_rptTxt_2139_1" order="338" propName="reportText" val="pT2" />
        </ListItem>
        <ListItem name="LI_2140" order="339" ID="2140.100004300" title="pT3: Tumor of any size with local invasion, but not invading adjacent organs">
         <Property name="p_rptTxt_2140_1" order="340" propName="reportText" val="pT3" />
        </ListItem>
        <ListItem name="LI_2141" order="341" ID="2141.100004300" title="pT4: Tumor of any size with invasion of adjacent organs (kidney, diaphragm, pancreas, spleen, or liver) or large blood vessels (renal vein or vena cava)">
         <Property name="p_rptTxt_2141_1" order="342" propName="reportText" val="pT4" />
        </ListItem>
       </List>
      </ListField>
     </Question>
     <Question name="Q_2143" order="343" ID="2143.100004300" title="Regional Lymph Nodes (pN) (Note H)">
      <Property name="p_rptTxt_2143_1" order="344" propName="reportText" val="Regional Lymph Nodes (pN)" />
      <ListField name="lf_2143_2" order="345">
       <List name="lst_2143_3" order="346">
        <ListItem name="LI_2144" order="347" ID="2144.100004300" title="pNX: Regional lymph nodes cannot be assessed">
         <Property name="p_rptTxt_2144_1" order="348" propName="reportText" val="pNX" />
        </ListItem>
        <ListItem name="LI_2145" order="349" ID="2145.100004300" title="pN0: No regional lymph node metastasis">
         <Property name="p_rptTxt_2145_1" order="350" propName="reportText" val="pN0" />
        </ListItem>
        <ListItem name="LI_2146" order="351" ID="2146.100004300" title="pN1: Metastasis in regional lymph node(s)">
         <Property name="p_rptTxt_2146_1" order="352" propName="reportText" val="pN1" />
        </ListItem>
       </List>
      </ListField>
     </Question>
     <Question name="Q_2149" order="353" ID="2149.100004300" title="?Distant Metastasis (pM) (Note I)">
      <Property name="p_rptTxt_2149_1" order="354" propName="reportText" val="Distant Metastasis (pM)" />
      <ListField name="lf_2149_2" order="355">
       <List name="lst_2149_3" order="356">
        <ListItem name="LI_20895" order="357" ID="20895.100004300" title="?Not applicable - pM cannot be determined from the submitted specimen(s)" omitWhenSelected="true">
         <Property name="p_rptTxt_20895_1" order="358" propName="reportText" val="Not applicable - pM cannot be determined from the submitted specimen(s)" />
        </ListItem>
        <ListItem name="LI_2151" order="359" ID="2151.100004300" title="pM1: Distant metastasis">
         <Property name="p_rptTxt_2151_1" order="360" propName="reportText" val="pM1" />
         <ChildItems name="ch_2151_2" order="361">
          <Question name="Q_2152" order="362" ID="2152.100004300" title="?Specify Site(s), if known" minCard="0">
           <Property name="p_rptTxt_2152_1" order="363" propName="reportText" val="Site(s)" />
           <ResponseField name="rf_2152_2" order="364">
            <Response name="rsp_2152_3" order="365">
             <string name="str_2152_4" order="366" />
            </Response>
           </ResponseField>
          </Question>
         </ChildItems>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_17884" order="367" ID="17884.100004300" title="ADDITIONAL FINDINGS" mustImplement="false" minCard="0">
    <ChildItems name="ch_17884_1" order="368">
     <Question name="Q_39188" order="369" ID="39188.100004300" title="Additional Pathologic Findings" mustImplement="false" minCard="0">
      <ListField name="lf_39188_1" order="370" maxSelections="0">
       <List name="lst_39188_2" order="371">
        <ListItem name="LI_2163" order="372" ID="2163.100004300" title="None identified" selectionDeselectsSiblings="true" />
        <ListItem name="LI_20897" order="373" ID="20897.100004300" title="Hemorrhage" />
        <ListItem name="LI_20898" order="374" ID="20898.100004300" title="Cystic change" />
        <ListItem name="LI_20854" order="375" ID="20854.100004300" title="Calcifications" />
        <ListItem name="LI_2167" order="376" ID="2167.100004300" title="Other (specify)">
         <Property name="p_rptTxt_2167_1" order="377" propName="reportText" val="{no text}" />
         <ListItemResponseField name="lirf_2167_2" order="378" responseRequired="true">
          <Response name="rsp_2167_3" order="379">
           <string name="str_2167_4" order="380" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Section name="S_17880" order="381" ID="17880.100004300" title="SPECIAL STUDIES" mustImplement="false" minCard="0">
    <ChildItems name="ch_17880_1" order="382">
     <Question name="Q_42054" order="383" ID="42054.100004300" title="Ancillary Studies (Note L)" mustImplement="false" minCard="0">
      <Property name="p_rptTxt_42054_1" order="384" propName="reportText" val="Ancillary Studies" />
      <ListField name="lf_42054_2" order="385" maxSelections="0">
       <List name="lst_42054_3" order="386">
        <ListItem name="LI_54683" order="387" ID="54683.100004300" title="Ki-67 labeling index (%) (specify)">
         <Property name="p_rptTxt_54683_1" order="388" propName="reportText" val="Ki-67 labeling index" />
         <ListItemResponseField name="lirf_54683_2" order="389" responseRequired="true">
          <Response name="rsp_54683_3" order="390">
           <integer name="intr_54683_4" order="391" maxInclusive="100" minInclusive="1" />
          </Response>
          <TextAfterResponse name="rtt_54683_5" order="392" val="%" />
          <ResponseUnits name="un_54683_6" order="393" val="%" unitSystem="UCOM" />
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_54436" order="394" ID="54436.100004300" title="Reticulin stain (specify type(s) and result(s))">
         <Property name="p_rptTxt_54436_1" order="395" propName="reportText" val="Reticulin stain" />
         <ListItemResponseField name="lirf_54436_2" order="396" responseRequired="true">
          <Response name="rsp_54436_3" order="397">
           <string name="str_54436_4" order="398" />
          </Response>
         </ListItemResponseField>
        </ListItem>
        <ListItem name="LI_52023" order="399" ID="52023.100004300" title="Other (specify type and result)">
         <Property name="p_rptTxt_52023_1" order="400" propName="reportText" val="{no text}" />
         <ListItemResponseField name="lirf_52023_2" order="401" responseRequired="true">
          <Response name="rsp_52023_3" order="402">
           <string name="str_52023_4" order="403" />
          </Response>
         </ListItemResponseField>
        </ListItem>
       </List>
      </ListField>
     </Question>
    </ChildItems>
   </Section>
   <Question name="Q_2168" order="404" ID="2168.100004300" title="?Comment(s)" minCard="0">
    <Property name="p_rptTxt_2168_1" order="405" propName="reportText" val="Comment(s)" />
    <ResponseField name="rf_2168_2" order="406">
     <Response name="rsp_2168_3" order="407">
      <string name="str_2168_4" order="408" />
     </Response>
    </ResponseField>
   </Question>
  </ChildItems>
 </Body>
 <Footer name="footer" order="409" ID="Footer.Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF">
  <Property type="meta" styleClass="copyright" order="410" propName="CopyrightFooter" val="(c) 2019 College of American Pathologists.  All rights reserved.  License required for use." />
 </Footer>
</FormDesign>`;
}