var transactionType = {data:[
	{
		'cd_key' : "ARS",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "ARS",
		'cd_desc' : "ARS"
	},
	{
		'cd_key' : "ASSIGN_VACCNT",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "가상계좌 발급",
		'cd_desc' : "가상계좌 발급시 발생하는 거래"
	},
	{
		'cd_key' : "BANK_DEPOSIT_PAYIN",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "BANK_DEPOSIT_PAYIN",
		'cd_desc' : "BANK_DEPOSIT_PAYIN"
	},
	{
		'cd_key' : "BANK_DEPOSIT_PAYOUT",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "BANK_DEPOSIT_PAYOUT",
		'cd_desc' : "BANK_DEPOSIT_PAYOUT"
	},
	{
		'cd_key' : "CHECK_BNK_CD",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "은행 계좌주 코드 검증",
		'cd_desc' : "은행 계좌에 1원을 송금하며 송금자 이름에 6자리의 인증코드를 전달하여 문자로 답변하여 계좌주를 인증한다."
	},
	{
		'cd_key' : "CHECK_BNK_NM",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "은행 계좌주 이름 검증",
		'cd_desc' : "은행의 계좌의 예금주명을 조회한다."
	},
	{
		'cd_key' : "CRD_AA",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "PAYIN_CHARGE",
		'cd_desc' : "PAYIN_CHARGE"
	},
	{
		'cd_key' : "CRD_APPROVAL_3D",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_APPROVAL_3D",
		'cd_desc' : "CRD_APPROVAL_3D"
	},
	{
		'cd_key' : "CRD_AUTH_3D",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_AUTH_3D",
		'cd_desc' : "CRD_AUTH_3D"
	},
	{
		'cd_key' : "CRD_AUTH_AA",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_AUTH_AA",
		'cd_desc' : "CRD_AUTH_AA"
	},
	{
		'cd_key' : "CRD_BASIC",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_BASIC",
		'cd_desc' : "CRD_BASIC"
	},
	{
		'cd_key' : "CRD_CANCEL",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_CANCEL",
		'cd_desc' : "CRD_CANCEL"
	},
	{
		'cd_key' : "CRD_CAPTURE",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_CAPTURE",
		'cd_desc' : "CRD_CAPTURE"
	},
	{
		'cd_key' : "CRD_CHECK_3D",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_CHECK_3D",
		'cd_desc' : "CRD_CHECK_3D"
	},
	{
		'cd_key' : "CRD_REGISTER",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "REGISTER_CRD",
		'cd_desc' : "REGISTER_CRD"
	},
	{
		'cd_key' : "CRD_REGISTER_TOKEN",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_REGISTER_TOKEN",
		'cd_desc' : "CRD_REGISTER_TOKEN"
	},
	{
		'cd_key' : "CRD_TOKEN",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "CRD_TOKEN",
		'cd_desc' : "CRD_TOKEN"
	},
	{
		'cd_key' : "ESCROW_RELEASE",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "에스크로 해제",
		'cd_desc' : "세이퍼트 송금 중 에스크로 거래에 묶인 돈을 해제 하는 요청을 한다."
	},
	{
		'cd_key' : "EXCHANGE_MONEY",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "환전",
		'cd_desc' : "Enterprise 계약"
	},
	{
		'cd_key' : "FUIOU_PAYIN",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "FUIOU_PAYIN",
		'cd_desc' : "FUIOU_PAYIN"
	},
	{
		'cd_key' : "MO",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "문자 질의 응답",
		'cd_desc' : "멤버에게 문자를 전송하여 4자리의 인증 코드로 답변을 한 경우, 원 요청자에게 동의한 내용으로 알린다."
	},
	{
		'cd_key' : "PENDING_RELEASE",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 펜딩 해제",
		'cd_desc' : "펜딩 거래를 해제 한다."
	},
	{
		'cd_key' : "SEND_MONEY",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 송금",
		'cd_desc' : "요청자의 세이퍼트 계좌에서 멤버의 은행 계좌로 돈을 송금한다."
	},
	{
		'cd_key' : "SEYFERT_PAYIN_VACCNT",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 가상계좌 입금 충전",
		'cd_desc' : "멤버의 가상계좌에 돈을 입금 받아 세이퍼트를 충전한다."
	},
	{
		'cd_key' : "SEYFERT_PAYIN_VACCNT_KYC",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "KYC 집금",
		'cd_desc' : "가상계좌로 입금이 허용된 고객만 입금 할 수 있도록 허용하는 거래"
	},
	{
		'cd_key' : "SEYFERT_RESERVED_PENDING",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 펜딩 예약 이체",
		'cd_desc' : "세이퍼트 예약 입금을 통해 펜딩 거래를 즉시 수행한다."
	},
	{
		'cd_key' : "SEYFERT_TRANSFER",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 에스크로 이체",
		'cd_desc' : "세이퍼트 에스크로 이체 (pull money 인 경우에 한 함)"
	},
	{
		'cd_key' : "SEYFERT_TRANSFER_PND",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 펜딩 이체",
		'cd_desc' : "세이퍼트 펜딩거래를 통해 멤버간의 돈을 이동 시킬 수 있다."
	},
	{
		'cd_key' : "SEYFERT_TRANSFER_RSRV",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 예약 이체",
		'cd_desc' : "세이퍼트 예약거래로 지정된 시간안에 지정된 금액을 입금하면 이체에 동의한 것으로 간주하여 세이퍼트 이체를 즉시 처리 한다."
	},
	{
		'cd_key' : "SEYFERT_WITHDRAW",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 출금",
		'cd_desc' : "세이퍼트 잔액을 멤버의 은행 계좌로 출금한다."
	},
	{
		'cd_key' : "SEYFERT_SETTLEMENT",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 자동 결제",
		'cd_desc' : "지정된 일자와 시각에 세이퍼트 이체 거래를 한다."
	},
	{
		'cd_key' : "SMS_API",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "SMS_API",
		'cd_desc' : "SMS_API"
	},
	{
		'cd_key' : "TRNSCTN_RECURRING",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "세이퍼트 자동 결제",
		'cd_desc' : "지정된 일자와 시각에 세이퍼트 이체 거래를 한다."
	},
	{
		'cd_key' : "UNLIMITED_RESERVE",
		'grp_key' : "TRNSCTN_TP",
		'lang_cd' : "ko",
		'cd_nm' : "UNLIMITED_RESERVE",
		'cd_desc' : "UNLIMITED_RESERVE"
	}
]};
